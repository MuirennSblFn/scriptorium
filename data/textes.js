/* ==========================================================================
   TEXTES.JS — le contenu du Scriptorium
   --------------------------------------------------------------------------
   C'est le SEUL fichier à modifier pour ajouter, éditer ou retirer un texte.
   Aucune autre page n'a besoin d'être touchée : dès qu'une entrée est ajoutée
   ici, elle apparaît automatiquement dans la bibliothèque (index.html) et
   devient lisible sur sa propre page (lire.html).

   Le mode d'emploi complet, avec des explications pas à pas, se trouve sur
   la page guide.html du site. Ce fichier ne contient que le strict
   nécessaire + deux exemples que tu peux dupliquer, modifier, ou supprimer.

   IMPORTANT — le champ "personnage" n'accepte que l'une de ces 5 valeurs
   exactes (respecter la majuscule) :
     "Alba" · "Muirenn" · "Mordren" · "Marcus" · "Autre"
   ========================================================================== */

window.TEXTES = [

  /* ------------------------------------------------------------------
     EXEMPLE 1 — un texte lié à un personnage
     Duplique ce bloc { ... } pour créer une nouvelle entrée.
     ------------------------------------------------------------------ */
  {
    // Identifiant unique, sans espace ni accent (sert dans l'URL).
    id: "mort-alba",

    // Titre affiché en grand.
    titre: "La Rose se fâne",

    // Petite citation en italique, affichée sous le titre (facultatif).
    epigraphe: "Life is to be lived, not regretted.",

    // Catégorie : "Alba", "Muirenn", "Mordren", "Marcus" ou "Autre".
    personnage: "Alba",

    // Date affichée (peut être une date in-universe ou réelle).
    date: "Au 12/08/2026",

    // Résumé court affiché sur la carte, dans la bibliothèque.
    resume: "Il est temps pour elle de partir.",

    // Image bandeau (facultative). Laisser vide ("") si tu n'en as pas :
    // une simple initiale élégante sera affichée à la place.
    image: "images/deathalba.jpg",

    // Corps du texte. S'écrit en HTML simple : un paragraphe = une
    // ligne <p>...</p>. Voir guide.html pour la liste complète des
    // balises utilisables (italique, citation, séparateur...).
    contenu: `
      <p>Alba sentit la vie s’échappait d’elle avant de voir le sang couler sur le carrelage. Venait-elle d’y chuter, ou bien s’y trouvait-elle depuis une éternité déjà ? Une toux écarlate et humide la ramena lentement à elle. La brûlure dans son abdomen se manifesta une nouvelle fois. Elle n’avait pas encore rejoint son seigneur et maître, Eldrin. </p>
<p>Qui lui avait infligé ce coup déjà, qui partait de d’au-dessus de son nombril et avait fendu sa chaire jusqu’à sa hanche, presque ? Quelle importance. Elle était sur le dos, sentant le carrelage de pierre froide de cette église dans son dos, alors que sa conscience menaçait de la quitter. Son sang coulait dans les joints du sol, comme de somptueuses rivières de rubis. </p> 
<p>Elle allait mourir là. Sans avoir pu s’être assuré de la survie de ses proches. Eira et Draven restaient en fuite. Peut-être le resteraient-ils toutes leur existence ? Elle ne serait semble-t-il plus là pour le voir de toute manière. Elle aurait aimé serrer sa cousine une dernière fois contre elle. Lui dire qu’elle lui avait racheté de toute façon, son fichu cadeau, qu’il l’attendait devant sa porte. Elle en aurait sangloté, de la revoir, de sentir le parfum de ses cheveux. </p>
<p>Ou bien alors elle sanglotait déjà ? Quelque chose coulait de ses yeux, son regard vissé sur le plafond en ogive de sa dernière demeure. Elle ne pouvait vérifier : elle n’avait plus la force de bouger les mains, l’une sur sa blessure, pressant faiblement, l’autre ouverte, contre le sol. La vie s’échappait, et à quoi bon la retenir. </p>
<p>Draven aussi s’était échappé : mais ses responsabilités l’avaient suivi. Ou bien c’était lui qui les poursuivait ? Eira serait saine et sauve avec lui. Alba l’aurait été aussi s’il avait été là, elle n’en doutait pas. Sommes toutes, elle préférait qu’il soit avec sa sœur. Il pourrait continuer à la surveiller, avec ce regard qu’il avait, mi-affectueux mi-inquiet, à chaque fois que l’une d’entre elles s’exprimaient. Il avait de beaux yeux son cousin. Elle, elle ne les reverrait plus. </p> 
<p>Elle l’entendait au loin, le bruit du clapotis de l’eau du fleuve, contre la pagaie de son dieu. Eldrin était en route, sa miséricorde la toucherait bientôt, et la soulagerait de ce monde. </p> 
<p>Un rire vint briser le silence du lieu de culte, déserté de ses combattants. Elle ne s’en inquiéta pas : il venait d’elle. Elle riait, aux portes du Grand Voyage. Elle riait, parce qu’Akashi ne reverrait jamais son argent. </p>
<p>Ah, Akashi. Le rire se mua en une plainte lente, déchirante. Un sanglot plus fort encore, comme si son corps se déchirait en partant de sa blessure jusqu’à son cœur, brisé en mille milliards de morceaux. Akashi. Son nom faisait des bulles de sang à la commissure de ses lèvres. Akashi, qu’aurait-elle dit ? Elle se serait moquée ? Peut-être. Plus probablement l’aurait-elle houspillé, faussement secoué, dissimulant son angoisse devant tout ce sang avant de la ramasser. Là, là elle se serait moquée c’est sûr, de sa faiblesse, de sa maigreur. Mais elle l’aurait ramené en lieu sûr, et Alba l’aurait maudite pour ça. Haïe. </p>
<p>Aimé encore un peu plus. </p>
<p>Mais ça, comment aurai-elle pu lui dire ? </p>
<p>A ses côtés, une frêle silhouette, encapuchonnée, s’agenouilla près d’elle, sans un mot, réconfortante et froide. Alba la connaissait bien, pour l’avoir servie, révérée, appelée et priée toute sa vie. Le maitre était là, le Dieu des Crânes et du Chemin. Eldrin. A lui, elle pouvait bien le dire, non ? </p>
<p> «  — Akashi, ça date du parapet, en première année. On a	grimpée les marches ensembles. Elle a complimenté mes cheveux, et moi les siens. J’étais timide, pâlotte, sur la défensive, et elle. Elle était solaire, elle était belle, elle était… » </p>
<p>Une main d’enfant posa son index sur sa bouche, émergeant avec lenteur de la manche de la silhouette. Que voulait-il dire par là ? Peut-être que même les morts ont leurs secrets, que même la pierre n’a le droit d’entendre. Ou bien peut-être que la route était encore longue, et qu’il valait mieux garder une telle histoire pour plus tard. </p>
<p>De la rivalité des deux guerrières, seul Eldrin connait le secret. </p>
<p>Alba sentie ses dernières forces décliner. Le sang baignait tout désormais. Ses longs cheveux étalés sur les dalles, son dos droit même dans la mort, il était temps. Elle était fatiguée de ce souvenir. Fatiguer de se battre, pour quoi, pour qui ? Et ça y est, son dernier moment sur cette pauvre terre. </p> 
<p>Elle eut une pensée pour tous ses champs de fleurs qu’elle ne foulerait jamais, pour les enfants qu’elle aurait pu porter, pour les amis qu’elle aurait pu avoir. Elle repensa à sa vie, passé à servir un dieu qui n’eut la décence de se montrer qu’au tout dernier instant d’une existence qu’elle lui avait consacré aveuglément. </p>
<p>Si la blessure n’avait pas été suffisante, le poids des regrets l’aurait achevé à sa place. Ecrasant comme la voûte au-dessus de sa tête, il acheva de tirer de ses yeux les dernières larmes de son enveloppe usée.</p>
<p>Elle pensa au soleil sur son visage. A la douceur de l’herbe sous ses pieds. Au parfum d’Eira, à la saveur des biscuits qu’ils croquaient avec Draven, au rire d’Akashi, quand elle perdait aux cartes. Le rire. La saveur. Le parfum. </p>
<p>Et c’était avec elle qu’elle voulait le passer allongée, ce dernier moment, celle qu’elle avait tant haï. </p>
<p>Alors, Eldrin se pencha sur son corps comme endormi, et tandis que le voile de la dernière des brumes se levait sur ses yeux, lui murmura quelques mots à l’oreille. Le regard de la jeune femme croisa celui qui se cachait sous la capuche. Et qui saurait dire si c’est ce qu’elle y vit, ou ce qu’il lui dit qui la fit réagir… </p>
<p>Mais Alba Blackfyre, en un dernier sursaut, expira son dernier souffle, un sourire de soulagement aux lèvres. </p>


    `,
  },

  /* ------------------------------------------------------------------
     EXEMPLE 2 — un écrit qui n'appartient à aucun des 4 personnages
     ------------------------------------------------------------------ */
  {
    id: "exemple-notes-sur-camlaan",
    titre: "Notes sur les brumes de Camlaan",
    epigraphe: "",
    personnage: "Autre",
    date: "carnet personnel",
    resume: "Quelques notes de worldbuilding sur le phénomène des brumes automnales qui recouvrent les étangs du domaine de Camlaan, et leur place dans les superstitions locales.",
    image: "",
    contenu: `
      <p>Chaque automne, les étangs disséminés sur les terres de Camlaan produisent une brume basse, presque immobile, qui s'attarde jusqu'au milieu de la matinée.</p>
      <p>Les Camelois racontent qu'elle porte la mémoire des chevaux perdus — ceux qu'on n'a jamais retrouvés après une charge, une fuite, ou un hiver trop rude.</p>
      <p><em>À développer : lien possible avec le culte d'Erya et les pierres de la lande.</em></p>
    `,
  },

  /* ------------------------------------------------------------------
     Ajoute tes propres textes ci-dessous, en copiant la structure
     ci-dessus. N'oublie pas la virgule à la fin de chaque bloc,
     sauf pour le tout dernier de la liste.
     ------------------------------------------------------------------ */

];
