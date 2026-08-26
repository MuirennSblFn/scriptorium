/* ==========================================================================
   Scriptorium — logique du site
   Ce fichier n'a normalement pas besoin d'être modifié : tout le contenu
   se pilote depuis data/textes.js
   ========================================================================== */

(function () {
  "use strict";

  var TEXTES = (window.TEXTES || []).slice().reverse(); // plus récents en premier

  // Les seules catégories possibles. L'ordre ici est l'ordre d'affichage
  // des filtres dans la bibliothèque.
  var CATEGORIES = ["Alba", "Muirenn", "Mordren", "Marcus", "Autre"];

  function stripHtml(html) {
    var div = document.createElement("div");
    div.innerHTML = html || "";
    return div.textContent || div.innerText || "";
  }

  function readingTime(html) {
    var words = stripHtml(html).trim().split(/\s+/).filter(Boolean).length;
    var minutes = Math.max(1, Math.round(words / 200));
    return minutes + " min de lecture";
  }

  function escapeHtml(str) {
    return String(str || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function monogram(titre) {
    return (titre || "?").trim().charAt(0).toUpperCase();
  }

  // Transforme un lien Spotify (morceau, playlist ou album) en lien
  // "embed" utilisable dans une iframe. Accepte les liens classiques
  // (open.spotify.com/track/...), les liens avec préfixe de langue
  // (open.spotify.com/intl-fr/track/...) et les liens déjà en embed.
  function spotifyEmbedUrl(url) {
    if (!url) return "";
    var match = String(url).match(/open\.spotify\.com\/(?:embed\/)?(?:intl-[a-z]{2}\/)?(track|album|playlist|episode|show|artist)\/([a-zA-Z0-9]+)/i);
    if (!match) return "";
    return "https://open.spotify.com/embed/" + match[1] + "/" + match[2];
  }

  /* ------------------------------------------------------------------
     Progress bar de lecture (utilisée sur lire.html)
     ------------------------------------------------------------------ */
  function initProgressBar() {
    var bar = document.querySelector(".progress-bar");
    if (!bar) return;
    window.addEventListener("scroll", function () {
      var h = document.documentElement;
      var scrolled = h.scrollTop;
      var height = h.scrollHeight - h.clientHeight;
      var pct = height > 0 ? (scrolled / height) * 100 : 0;
      bar.style.width = pct + "%";
    });
  }

  /* ------------------------------------------------------------------
     PAGE BIBLIOTHÈQUE (index.html)
     ------------------------------------------------------------------ */
  function initLibrary() {
    var grid = document.getElementById("text-grid");
    var pillWrap = document.getElementById("tag-filters");
    var searchInput = document.getElementById("search-input");
    var countEl = document.getElementById("result-count");
    if (!grid) return;

    var activeCategories = new Set();
    var query = "";

    function cardHtml(t) {
      var mediaInner = t.image
        ? '<img src="' + escapeHtml(t.image) + '" alt="">'
        : '<span class="monogram">' + escapeHtml(monogram(t.titre)) + "</span>";

      return (
        '<a class="text-card fade-in" href="lire.html?id=' + encodeURIComponent(t.id) + '">' +
          '<div class="text-card-media">' +
            '<span class="text-card-type">' + escapeHtml(t.personnage || "Autre") + "</span>" +
            mediaInner +
          "</div>" +
          '<div class="text-card-body">' +
            '<div class="text-card-meta"><span>' + escapeHtml(t.date || "") + "</span><span class=\"dot\"></span><span>" + readingTime(t.contenu) + "</span></div>" +
            "<h3>" + escapeHtml(t.titre) + "</h3>" +
            '<p class="excerpt">' + escapeHtml(t.resume || "") + "</p>" +
            '<div class="text-card-read">Lire <svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M5 12h14M13 6l6 6-6 6"/></svg></div>' +
          "</div>" +
        "</a>"
      );
    }

    function render() {
      var filtered = TEXTES.filter(function (t) {
        var cat = t.personnage || "Autre";
        var matchesCategory = activeCategories.size === 0 || activeCategories.has(cat);
        var haystack = (t.titre + " " + t.resume + " " + cat).toLowerCase();
        var matchesQuery = query === "" || haystack.indexOf(query) !== -1;
        return matchesCategory && matchesQuery;
      });

      grid.innerHTML = filtered.length
        ? filtered.map(cardHtml).join("")
        : '<div class="empty-state">Aucun texte ne correspond à ta recherche.<br>Essaie un autre filtre, ou ajoute-en un dans <code>data/textes.js</code>.</div>';

      if (countEl) {
        countEl.textContent = filtered.length + (filtered.length > 1 ? " textes" : " texte");
      }
    }

    // Pills de filtrage — toujours les 5 catégories fixes, dans cet ordre.
    if (pillWrap) {
      var allPill = document.createElement("button");
      allPill.className = "tag-pill active";
      allPill.type = "button";
      allPill.textContent = "Tous";
      allPill.addEventListener("click", function () {
        activeCategories.clear();
        Array.from(pillWrap.children).forEach(function (el) { el.classList.remove("active"); });
        allPill.classList.add("active");
        render();
      });
      pillWrap.appendChild(allPill);

      CATEGORIES.forEach(function (cat) {
        var pill = document.createElement("button");
        pill.className = "tag-pill";
        pill.type = "button";
        pill.textContent = cat;
        pill.addEventListener("click", function () {
          if (activeCategories.has(cat)) {
            activeCategories.delete(cat);
            pill.classList.remove("active");
          } else {
            activeCategories.add(cat);
            pill.classList.add("active");
          }
          allPill.classList.toggle("active", activeCategories.size === 0);
          render();
        });
        pillWrap.appendChild(pill);
      });
    }

    if (searchInput) {
      searchInput.addEventListener("input", function (e) {
        query = e.target.value.trim().toLowerCase();
        render();
      });
    }

    render();
  }

  /* ------------------------------------------------------------------
     PAGE LECTEUR (lire.html)
     ------------------------------------------------------------------ */
  function initReader() {
    var root = document.getElementById("reader-root");
    if (!root) return;

    var params = new URLSearchParams(window.location.search);
    var id = params.get("id");
    var index = TEXTES.findIndex(function (t) { return t.id === id; });
    var texte = index !== -1 ? TEXTES[index] : null;

    if (!texte) {
      root.innerHTML =
        '<div class="reader-header">' +
          '<a class="back-link" href="index.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Retour à la bibliothèque</a>' +
          "<h1>Texte introuvable</h1>" +
          '<p class="reader-epigraph">Ce texte n\'existe pas, ou plus.</p>' +
        "</div>";
      return;
    }

    document.title = texte.titre + " — Scriptorium";

    var metaHtml =
      '<div class="reader-info">' +
        "<span>" + escapeHtml(texte.personnage || "Autre") + "</span>" +
        '<span class="dot"></span><span>' + escapeHtml(texte.date || "") + "</span>" +
        '<span class="dot"></span><span>' + readingTime(texte.contenu) + "</span>" +
      "</div>";

    var headerHtml =
      '<div class="reader-header fade-in">' +
        '<a class="back-link" href="index.html"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.5"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>Retour à la bibliothèque</a>' +
        '<div class="reader-meta-row"><span class="mini-tag">' + escapeHtml(texte.personnage || "Autre") + "</span></div>" +
        "<h1>" + escapeHtml(texte.titre) + "</h1>" +
        (texte.epigraphe ? '<p class="reader-epigraph">' + escapeHtml(texte.epigraphe) + "</p>" : "") +
        metaHtml +
      "</div>";

    var bannerHtml = texte.image
      ? '<div class="reader-banner fade-in"><img src="' + escapeHtml(texte.image) + '" alt=""></div>'
      : "";

    var audioHtml = texte.spotify
      ? '<div class="reader-audio fade-in">' +
          '<p class="reader-audio-label">En l\'écrivant, j\'écoutais</p>' +
          '<div class="reader-audio-inner">' +
            '<iframe src="' + escapeHtml(spotifyEmbedUrl(texte.spotify)) + '" width="100%" height="152" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>' +
          "</div>" +
        "</div>"
      : "";

    var bodyHtml = '<article class="reader-body fade-in">' + texte.contenu + "</article>";

    var prevItem = TEXTES[index + 1]; // plus ancien
    var nextItem = TEXTES[index - 1]; // plus récent

    var footerHtml = '<div class="reader-footer">';
    footerHtml += prevItem
      ? '<a class="reader-nav-link prev" href="lire.html?id=' + encodeURIComponent(prevItem.id) + '"><span class="label">← Précédent</span><span class="title">' + escapeHtml(prevItem.titre) + "</span></a>"
      : "<span></span>";
    footerHtml += nextItem
      ? '<a class="reader-nav-link next" href="lire.html?id=' + encodeURIComponent(nextItem.id) + '"><span class="label">Suivant →</span><span class="title">' + escapeHtml(nextItem.titre) + "</span></a>"
      : "<span></span>";
    footerHtml += "</div>";

    root.innerHTML = headerHtml + bannerHtml + audioHtml + bodyHtml + footerHtml;
  }

  document.addEventListener("DOMContentLoaded", function () {
    initProgressBar();
    initLibrary();
    initReader();
  });
})();
