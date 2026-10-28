/* ==========================================================================
   Scriptorium — page "Écrire"
   Publie les textes dans data/publications.json via l'API GitHub.
   Le jeton reste dans le navigateur (localStorage) et n'est envoyé
   qu'à api.github.com.
   ========================================================================== */

(function () {
  "use strict";

  var API = "https://api.github.com";
  var DATA_PATH = "data/publications.json";
  var STORE_KEY = "scriptorium_admin_cfg";

  var cfg = { owner: "muirennsblfn", repo: "scriptorium", branch: "main", token: "" };
  var state = { items: [], sha: null, editingId: null, imageB64: null, imageName: null, loaded: false };

  function $(id) { return document.getElementById(id); }

  /* ---------- utilitaires ---------- */

  function setStatus(msg, type) {
    var el = $("status");
    if (!msg) { el.className = "status"; el.textContent = ""; return; }
    el.className = "status show " + (type || "");
    el.textContent = msg;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function b64encode(str) { return btoa(unescape(encodeURIComponent(str))); }
  function b64decode(b64) { return decodeURIComponent(escape(atob(b64.replace(/\s/g, "")))); }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function slugify(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "")
      .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "texte";
  }

  function todayLabel() {
    var d = new Date();
    function p(n) { return n < 10 ? "0" + n : "" + n; }
    return "Au " + p(d.getDate()) + "/" + p(d.getMonth() + 1) + "/" + d.getFullYear();
  }

  // Texte brut -> HTML. Si le texte contient déjà des <p>, il est gardé tel quel.
  function toHtml(raw) {
    var t = String(raw).replace(/\r\n/g, "\n").trim();
    if (/<p[\s>]/i.test(t)) return t;
    return t.split(/\n+/).map(function (l) { return l.trim(); }).filter(Boolean).map(function (l) {
      if (/^(\*\*\*|---+)$/.test(l)) return "<hr>";
      var h = esc(l)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.+?)\*/g, "<em>$1</em>");
      return "<p>" + h + "</p>";
    }).join("\n");
  }

  /* ---------- API GitHub ---------- */

  function gh(method, path, body) {
    return fetch(API + path, {
      method: method,
      cache: "no-store",
      headers: {
        "Authorization": "Bearer " + cfg.token,
        "Accept": "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28"
      },
      body: body ? JSON.stringify(body) : undefined
    }).then(function (r) {
      return r.json().catch(function () { return {}; }).then(function (data) {
        if (!r.ok) {
          var err = new Error(data.message || ("Erreur " + r.status));
          err.status = r.status;
          throw err;
        }
        return data;
      });
    });
  }

  function repoPath(p) {
    return "/repos/" + encodeURIComponent(cfg.owner) + "/" + encodeURIComponent(cfg.repo) + "/contents/" + p;
  }

  function explain(err) {
    if (err.status === 401) return "Jeton refusé ou expiré. Recrée-en un dans GitHub et colle-le dans la connexion.";
    if (err.status === 403) return "Accès refusé : vérifie que le jeton a bien la permission « Contents : Read and write » sur ce dépôt.";
    if (err.status === 404) return "Dépôt ou branche introuvable : vérifie le compte, le nom du dépôt et la branche, et que le jeton a accès à ce dépôt.";
    if (err.status === 409 || err.status === 422) return "Conflit : le fichier a changé entre-temps. Recharge la page et recommence.";
    return err.message || "Erreur inconnue.";
  }

  function loadItems() {
    setStatus("Connexion à GitHub…");
    return gh("GET", repoPath(DATA_PATH) + "?ref=" + encodeURIComponent(cfg.branch) + "&t=" + Date.now())
      .then(function (data) {
        state.sha = data.sha;
        if (data.content && data.encoding === "base64") return b64decode(data.content);
        if (data.download_url) return fetch(data.download_url + "?t=" + Date.now()).then(function (r) { return r.text(); });
        return "[]";
      })
      .catch(function (err) {
        if (err.status === 404 && /not found/i.test(err.message || "")) {
          // Le fichier n'existe pas encore : on le créera à la première publication.
          // (mais si c'est le dépôt qui est introuvable, on le saura à l'envoi)
          state.sha = null;
          return "[]";
        }
        throw err;
      })
      .then(function (txt) {
        var list = [];
        try { list = JSON.parse(txt); } catch (e) { list = []; }
        state.items = Array.isArray(list) ? list : [];
        state.loaded = true;
        renderItems();
        setStatus("Connecté à " + cfg.owner + "/" + cfg.repo + ". Tu peux écrire.", "ok");
        $("settings-panel").open = false;
      })
      .catch(function (err) {
        state.loaded = false;
        setStatus(explain(err), "error");
      });
  }

  function saveItems(message) {
    var body = {
      message: message,
      content: b64encode(JSON.stringify(state.items, null, 2) + "\n"),
      branch: cfg.branch
    };
    if (state.sha) body.sha = state.sha;
    return gh("PUT", repoPath(DATA_PATH), body).then(function (res) {
      state.sha = res.content.sha;
    });
  }

  function uploadImage(name, b64) {
    return gh("PUT", repoPath("images/" + name), {
      message: "Ajout de l'image " + name,
      content: b64,
      branch: cfg.branch
    });
  }

  /* ---------- image ---------- */

  function handleImageFile(file) {
    state.imageB64 = null;
    state.imageName = null;
    $("image-preview").innerHTML = "";
    if (!file) return;
    var reader = new FileReader();
    reader.onload = function () {
      var img = new Image();
      img.onload = function () {
        var max = 1600;
        var scale = Math.min(1, max / Math.max(img.width, img.height));
        var c = document.createElement("canvas");
        c.width = Math.round(img.width * scale);
        c.height = Math.round(img.height * scale);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        var url = c.toDataURL("image/jpeg", 0.85);
        state.imageB64 = url.split(",")[1];
        var base = slugify($("f-titre").value || file.name.replace(/\.[^.]+$/, ""));
        state.imageName = base + "-" + Date.now().toString(36) + ".jpg";
        var prev = document.createElement("img");
        prev.src = url;
        $("image-preview").appendChild(prev);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  /* ---------- formulaire ---------- */

  function resetForm() {
    state.editingId = null;
    state.imageB64 = null;
    state.imageName = null;
    ["f-titre", "f-epigraphe", "f-resume", "f-spotify", "f-image", "f-texte"].forEach(function (id) { $(id).value = ""; });
    $("f-perso").value = "Alba";
    $("f-date").value = todayLabel();
    $("f-image-file").value = "";
    $("image-preview").innerHTML = "";
    $("preview").hidden = true;
    $("editor-title").textContent = "Nouveau texte";
    $("btn-publish").textContent = "Publier";
    $("btn-cancel").hidden = true;
  }

  function editItem(id) {
    var it = state.items.filter(function (x) { return x.id === id; })[0];
    if (!it) return;
    resetForm();
    state.editingId = id;
    $("f-titre").value = it.titre || "";
    $("f-perso").value = it.personnage || "Autre";
    $("f-date").value = it.date || "";
    $("f-epigraphe").value = it.epigraphe || "";
    $("f-resume").value = it.resume || "";
    $("f-spotify").value = it.spotify || "";
    $("f-image").value = it.image || "";
    $("f-texte").value = it.contenu || "";
    $("editor-title").textContent = "Modifier : " + it.titre;
    $("btn-publish").textContent = "Enregistrer les modifications";
    $("btn-cancel").hidden = false;
    $("editor").scrollIntoView({ behavior: "smooth" });
  }

  function deleteItem(id) {
    var it = state.items.filter(function (x) { return x.id === id; })[0];
    if (!it || !confirm("Supprimer « " + it.titre + " » du site ?")) return;
    state.items = state.items.filter(function (x) { return x.id !== id; });
    setStatus("Suppression en cours…");
    saveItems("Suppression : " + it.titre).then(function () {
      renderItems();
      setStatus("Texte supprimé. Il disparaîtra du site dans une à deux minutes.", "ok");
    }).catch(function (err) {
      state.items.push(it);
      setStatus(explain(err), "error");
    });
  }

  function renderItems() {
    var ul = $("items");
    ul.innerHTML = "";
    if (!state.items.length) {
      var li = document.createElement("li");
      li.innerHTML = '<span class="empty">Aucun texte publié depuis cette page pour l\'instant.</span>';
      ul.appendChild(li);
      return;
    }
    state.items.slice().reverse().forEach(function (it) {
      var li = document.createElement("li");
      var left = document.createElement("div");
      var t = document.createElement("div");
      t.className = "it-title";
      t.textContent = it.titre;
      var m = document.createElement("div");
      m.className = "it-meta";
      m.textContent = (it.personnage || "Autre") + " · " + (it.date || "");
      left.appendChild(t);
      left.appendChild(m);

      var actions = document.createElement("div");
      actions.className = "it-actions";
      var b1 = document.createElement("button");
      b1.type = "button"; b1.className = "btn btn-ghost btn-small"; b1.textContent = "Modifier";
      b1.onclick = function () { editItem(it.id); };
      var b2 = document.createElement("button");
      b2.type = "button"; b2.className = "btn btn-ghost btn-small"; b2.textContent = "Supprimer";
      b2.onclick = function () { deleteItem(it.id); };
      actions.appendChild(b1);
      actions.appendChild(b2);

      li.appendChild(left);
      li.appendChild(actions);
      ul.appendChild(li);
    });
  }

  function showPreview() {
    var box = $("preview");
    var epi = $("f-epigraphe").value.trim();
    box.innerHTML =
      "<h3>" + esc($("f-titre").value || "Sans titre") + "</h3>" +
      (epi ? '<p class="reader-epigraph">' + esc(epi) + "</p>" : "") +
      '<article class="reader-body">' + toHtml($("f-texte").value) + "</article>";
    box.hidden = false;
    box.scrollIntoView({ behavior: "smooth" });
  }

  function uniqueId(titre) {
    var base = slugify(titre), id = base, n = 2;
    while (state.items.some(function (x) { return x.id === id; })) { id = base + "-" + n++; }
    return id;
  }

  function publish() {
    if (!state.loaded) { setStatus("Connecte-toi d'abord à GitHub (panneau « Connexion »).", "error"); $("settings-panel").open = true; return; }
    var titre = $("f-titre").value.trim();
    var texte = $("f-texte").value.trim();
    if (!titre || !texte) { setStatus("Il faut au moins un titre et un texte.", "error"); return; }

    var btn = $("btn-publish");
    btn.disabled = true;
    setStatus("Publication en cours…");

    var imagePath = $("f-image").value.trim();
    var chain = Promise.resolve();
    if (state.imageB64) {
      var name = state.imageName;
      chain = uploadImage(name, state.imageB64).then(function () { imagePath = "images/" + name; });
    }

    var previousItems = state.items.slice();
    chain.then(function () {
      var item = {
        id: state.editingId || uniqueId(titre),
        titre: titre,
        epigraphe: $("f-epigraphe").value.trim(),
        personnage: $("f-perso").value,
        date: $("f-date").value.trim() || todayLabel(),
        resume: $("f-resume").value.trim(),
        image: imagePath,
        spotify: $("f-spotify").value.trim(),
        contenu: toHtml(texte)
      };
      if (state.editingId) {
        state.items = state.items.map(function (x) { return x.id === state.editingId ? item : x; });
      } else {
        state.items.push(item);
      }
      return saveItems((state.editingId ? "Modification : " : "Nouveau texte : ") + titre);
    }).then(function () {
      renderItems();
      resetForm();
      setStatus("Publié ! Le texte apparaîtra sur le site dans une à deux minutes (recharge la page du site si besoin).", "ok");
    }).catch(function (err) {
      state.items = previousItems;
      setStatus(explain(err), "error");
    }).then(function () {
      btn.disabled = false;
    });
  }

  /* ---------- connexion ---------- */

  function readCfgFields() {
    cfg.owner = $("cfg-owner").value.trim();
    cfg.repo = $("cfg-repo").value.trim();
    cfg.branch = $("cfg-branch").value.trim() || "main";
    cfg.token = $("cfg-token").value.trim();
  }

  function connect() {
    readCfgFields();
    if (!cfg.owner || !cfg.repo || !cfg.token) { setStatus("Compte, dépôt et jeton sont nécessaires.", "error"); return; }
    try { localStorage.setItem(STORE_KEY, JSON.stringify(cfg)); } catch (e) {}
    loadItems();
  }

  function forget() {
    try { localStorage.removeItem(STORE_KEY); } catch (e) {}
    $("cfg-token").value = "";
    cfg.token = "";
    state.loaded = false;
    $("settings-panel").open = true;
    setStatus("Jeton oublié sur cet appareil.", "ok");
  }

  function init() {
    try {
      var saved = JSON.parse(localStorage.getItem(STORE_KEY) || "null");
      if (saved) {
        cfg = saved;
        $("cfg-owner").value = cfg.owner || "";
        $("cfg-repo").value = cfg.repo || "";
        $("cfg-branch").value = cfg.branch || "main";
        $("cfg-token").value = cfg.token || "";
      }
    } catch (e) {}

    resetForm();
    renderItems();

    $("btn-connect").onclick = connect;
    $("btn-forget").onclick = forget;
    $("btn-publish").onclick = publish;
    $("btn-preview").onclick = showPreview;
    $("btn-cancel").onclick = resetForm;
    $("f-image-file").onchange = function (e) { handleImageFile(e.target.files[0]); };

    if (cfg.token) loadItems();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
