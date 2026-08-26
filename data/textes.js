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

   Champ optionnel "spotify" — colle simplement le lien de partage d'un
   morceau, d'une playlist ou d'un album Spotify (le lien "Partager > Copier
   le lien du morceau" depuis l'app ou le site). Un lecteur s'affiche alors
   automatiquement en haut du texte. Laisse vide ("") si tu n'en veux pas.
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

    spotify: "https://open.spotify.com/intl-fr/track/010ALbbh5KlQ4fKWgSdhRd?si=b8db23cfc7154b84"

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
     EXEMPLE 1 — un texte lié à un personnage
     Duplique ce bloc { ... } pour créer une nouvelle entrée.
     ------------------------------------------------------------------ */
  {
    // Identifiant unique, sans espace ni accent (sert dans l'URL).
    id: "mort-muirenn",

    // Titre affiché en grand.
    titre: "Souvenirs",

    // Petite citation en italique, affichée sous le titre (facultatif).
    epigraphe: "And I wondered if a memory is something you have or something you've lost...",

    // Catégorie : "Alba", "Muirenn", "Mordren", "Marcus" ou "Autre".
    personnage: "Muirenn",

    // Date affichée (peut être une date in-universe ou réelle).
    date: "Au 19/08/2026",

    // Résumé court affiché sur la carte, dans la bibliothèque.
    resume: "Il a assez dansé : il faut se reposer maintenant.",

    // Image bandeau (facultative). Laisser vide ("") si tu n'en as pas :
    // une simple initiale élégante sera affichée à la place.
    image: "images/muirenndeath.jpg",

    spotify: "https://open.spotify.com/intl-fr/track/4TIONK6tnZWlNl5HdKpWby?si=50b5e8ec603142f1"

    // Corps du texte. S'écrit en HTML simple : un paragraphe = une
    // ligne <p>...</p>. Voir guide.html pour la liste complète des
    // balises utilisables (italique, citation, séparateur...).
    contenu: `<p>Muirenn avait connu la chaleur des tavernes, la beauté des fêtes de villages, des soirées de grandes villes, des bals populaires et de jolies réceptions. Il avait arpenté mille lieux de festivités en dansant et en chantant, sous son masque de ménestrel, troubadour audacieux parfois impudique et parfois simplement maladroit. Il avait ressenti la force des chants entonnés en chœur, l'ivresse de la boisson qui coulait dans les gorges, les effusions d'affections dues à l'alcool. L'odeur des festins, le parfum amer mais libérateur des drogues.</p>
<p>Du haut de sa vingtaine désormais passée, il avait des souvenirs par milliers. Des fêtes, des évènements, des choses de bardes, mais aussi des personnes et des noms. Des souvenirs de ce qu'il avait décidé de faire de sa vie : un sacerdoce athéiste, avec pour seule pensée fondatrice un naïf pacifisme. Toute vie est sacrée. Il s'était engagé sur le terrible sentier des Cavaliers de Basgiath avec cette seule idée en tête, faire triompher les valeurs de la non-violence au-dessus de tout.</p>
<p>Le pauvre troubadour avait alors découvert que si l'on pouvait chanter pour de multiples occasions, on pouvait aussi tuer pour à peu près autant de raisons. Il avait vu des meurtres rituels et religieux sur une île lointaine, des meurtres et crimes passionnels, des assassinats préventifs et réflexes. Des massacres par envie, des tueries pour le Bien, toujours pour l'Idéal. Il avait vu la Paix se faire frapper au corps, battre par le Marteau de la Guerre, jusqu'à devenir une arme de plus au nom du sang.</p>
<p>Son innocence avait été brisée, les morceaux de celle-ci rassemblés en un charmant bouquet, qu'on l'avait contraint à respirer à pleins nez tout au long de sa formation de bon soldat. Et si être lié à une cadette d'un an son aînée, respectable et respectée, l'avait préservé de plus de problèmes, c'était bien l'une des seules raisons qui lui avait permis de ne pas perdre tout espoir : autour de lui se trouvait d'autres personnes tout aussi indignées que lui, tout aussi horrifiées et terrifiées par l'idée de prendre des vies comme on fauche le blé.</p>
<p>Il revoyait les visages et les noms. Alva, Aelwynn, Kyara. Certains l'avaient soutenu sans partager sa pensée : Leysa, sa liée.</p>
<p>Il y avait aussi Corraich, sa dragonne. Conseillère, alliée, guide sage. Il aurait dû l'écouter plus souvent. Si elle ne partageait pas son pacifisme, la lassitude des combats l'avait menée sur le chemin de la paix.</p>
<p>Tant de souvenirs. Des personnes, des moments. Il y avait sa famille aussi. Lorsqu'il s'était levé comme pour la première fois, il y a maintenant plus de cinq ans, sur le rivage du petit village de Sablefin, Muirenn n'avait aucun autre souvenir que celui de son nom. Une main céleste, invisible et omnipotente, semblait pouvoir tirer le voile sur cette amnésie, et s'amusait à lui montrer parfois de douces images de son passé, visions oniriques que le garçon chérissait plus que tout.</p>
<p>Mahidevran, Mahin, Mirihmah, Shirin. Trois aînées et une cadette. Ses sœurs, sa famille, son cœur, qui reposait quelque part, si le Feu ne les lui avait pas déjà prises. Il les aimait sans les connaitre, comme on aime une peinture, une statue, une vallée ou l'océan. Autant pour leur nature profonde et inconnue que pour ce qu'il voyait en elles. Son désir de vivre, et de les retrouver.</p>
<p>Ce désir était la seule chose qui l'empêchait de lâcher sa lance.</p>
<p>Devant lui, un autre être humain. Il avait les yeux noirs, et le teint couleur caramel. Muirenn adorait ça, le caramel. Il en mangeait souvent lors des fêtes de Solthéa, dans sa vie d'avant. La vie d'avant, c'était celle qui s'étendait entre son réveil sur la plage, il y a des années, et maintenant. Maintenant, c'était ce moment, où ce type à la peau hâlée et aux yeux charbons, aussi effrayé que lui, pointait une arbalète sur son torse.</p>
<p>Une bâtisse en ruine, dehors un monde de feu et de cendre. La frontière poroméenne n'est qu'à quelques lieues. Muirenn ne sait pas s'il est seul. Il a cru entendre Alva hurler son nom, alors que les scorpions abattaient un dragon, les forces d'invasion mêlées à des insurgés navarrois lançant l'assaut sur leur avant-poste désorganisé, pris par surprise.</p>
<p>Tout était si confus dans ses souvenirs ! Il pouvait se remémorer le visage de Shirin avec une précision folle, mais se révélait incapable de comprendre ce qui l'avait amené dans cette guérite, avec sa lance, face à ce qui paraissait être un soldat ennemi. Ce qu'il savait par contre, c'est que le temps semblait s'être dilaté, et que tout se déroulait très vite dans sa petite tête.</p>
<p>Corraich y hurlait, quelque part au fond de son crâne. La voix de Leysa s'y trouvait aussi, dans sa caboche. Rigolo ce mot, caboche. Pourquoi faisaient-elles autant de bruit ? Il était si bien avec ses souvenirs… Ses souvenirs d'un monde de paix, de ses sœurs, de la violence qu'il voulait laisser derrière lui.</p>
<p>Le rivage de Sablefin. Le tabernacle de Séraphis à Ashenvale. La beauté du monde. Basgiath. Le Parapet et sa promesse de paix. Le Gant sans pantalon. Alva sur les remparts. Leysa et Reis près du Vale. Ses sœurs. Le Feu. Malekys, Oaly, Kyara, la danse et les agrumes. Ses souvenirs, si doux, si confortables. Un monde où se battre valait encore le coup.</p>
<p>Voilà qu'ils s'échappaient. Tout se teintait de gris. Pourquoi ? Qu'est-ce qui gâchait ce moment ? Était-ce sa lance, qu'il serrait si fort, ou bien l'odeur des cendres et de l'incendie ? Pourquoi ces souvenirs le fuyaient ? Pourquoi cela devenait si dur de réfléchir ?</p>
<p>Ça y est, il se souvenait ! C'est parce qu'il devait dire au type de baisser son arme, qu'il ne lui voulait pas de mal, qu'il s'appelait Muirenn, et qu'il ne lui ferait aucun mal.</p>
<p>Mais ne venait-il pas de le faire ? Allez, souviens-toi Muirenn…</p>
<p>Si, il avait dit tout ça ! Et l'autre, qu'avait-il répondu ? Il lui avait dit son nom n'est-ce pas ?</p>
<p>Non.</p>
<p>Le regard de Muirenn tomba sur son torse, attiré par le bruit de sa lance tombant au sol. Et ce qu'il vit expliqua soudain pourquoi il l'avait lâchée, et pourquoi il était si dur de réfléchir, si dur de se souvenir.</p>
<p>Le carreau dépassait de sa poitrine, fiché en plein cœur. Crachotant un caillot de sang, il bascula sur ses genoux. Il aurait dû se sentir transpercé de part en part, embrasé par l'horreur et la douleur, il aurait dû sentir la vie le quitter avec ce sang vermeil.</p>
<p>Au lieu de ça, Muirenn regretta de ne même plus avoir la force de siffler. Ce qu'il sentait partir avec horreur, c'était les souvenirs qu'il avait tant chéris.</p>
<p>Le visage de ses sœurs s'estompa, la voix d'Alva lui devint inconnue, Leysa ne fut bientôt plus qu'un nom, Corraich à peine une suite de syllabes.</p>
<p>Et même la paix pour laquelle il s'était tant battu perdit son sens, alors que ses yeux se vidaient. Il n'était personne, n'avait été personne, ne serait jamais rien. Et alors qu'il réalisait ça, son regard fixé pour l'éternité sur le plafond de la minable guérite en bois, allongé sur le dos, l'homme qui l'avait abattu l'enjamba, ignorant son nom, ignorant qui il était.</p>
<p>Il venait d'abattre un Cavalier de plus, et cherchait déjà le prochain.</p>

    `,
  },

    /* ------------------------------------------------------------------
     EXEMPLE 1 — un texte lié à un personnage
     Duplique ce bloc { ... } pour créer une nouvelle entrée.
     ------------------------------------------------------------------ */
  {
    // Identifiant unique, sans espace ni accent (sert dans l'URL).
    id: "amour-muirenn",

    // Titre affiché en grand.
    titre: "L'allée des Rossignols",

    // Petite citation en italique, affichée sous le titre (facultatif).
    epigraphe: "Stranger, you showed me it's true / I'm capable of loving someone the way I loved you",

    // Catégorie : "Alba", "Muirenn", "Mordren", "Marcus" ou "Autre".
    personnage: "Muirenn",

    // Date affichée (peut être une date in-universe ou réelle).
    date: "Au 25/08/2026",

    // Résumé court affiché sur la carte, dans la bibliothèque.
    resume: "Un missive qu'il n'aura jamais l'occasion de lire.",

    // Image bandeau (facultative). Laisser vide ("") si tu n'en as pas :
    // une simple initiale élégante sera affichée à la place.
    image: "images/muirennlove.jpg",

    spotify: "https://open.spotify.com/intl-fr/track/3Y7DFxcLoqN2IJWOKn9DN0?si=cd5718cdb6d04ae3"

    // Corps du texte. S'écrit en HTML simple : un paragraphe = une
    // ligne <p>...</p>. Voir guide.html pour la liste complète des
    // balises utilisables (italique, citation, séparateur...).
    contenu: `<p>Lettre ouverte à celui qui se reconnaîtra.</p>
<p>J'étais une fille de seize ans. Les fêtes d'Aegisara, à Ashenvale, sont souvent célébrées les dix jours durant, pour peu qu'un ou plusieurs mariages soient à l'ordre du jour. Cette année-là, c'était ma sœur aînée qui épousait un aspirant à l'infanterie, et un de mes cousins qui recevait la main d'une honnête lavandière, une voisine.</p>
<p>Moi, je rêvais d'intégrer le quadrant des Guérisseurs. J'étais jeune, un peu naïve, sûrement. Souvent, quand je repense à toi, je suis heureuse que tu n'aies pas cherché à en profiter. Je voulais un monde avec moins de souffrance, où les blessures à panser seraient plus souvent celles du cœur et de l'âme que celles du corps. On s'est beaucoup moqué de moi à l'époque, pour ça. Pas toi, jamais.</p>
<p>J'habitais allée des Rossignols. Nous avions pu louer la petite cour en bas pour tenir les deux repas de mariage. Au printemps, les pots accueillent tout un tas d'amarantes, quelques brins de muguet aussi, et des jacinthes. Maman aimait beaucoup les jacinthes. Je me souviens aussi de la première fois où l'on s'est vus : tu es revenu avec papa, qui t'avait rencontré devant Le Tambour Rafistolé, l'auberge à l'angle de l'allée et de la rue des Cendres.</p>
<p>Il t'avait trouvé en train de jouer du luth pour quelques piécettes, et c'était dit que ce serait à la fois une pieuse chose et une occasion d'avoir un peu de musique que de t'embaucher pour animer les festivités. Je me rappelle t'avoir trouvé très beau, malgré ta tenue dépenaillée et l'odeur de sel qui collait à ta peau hâlée. Plus tard, sur le toit je crois, tu m'avais expliqué : tu venais d'un petit village côtier de la province, et tu n'avais pas assez d'argent en poche pour présenter mieux que ça.</p>
<p>Toujours est-il que je t'ai trouvé beau. Tu étais drôle quand tu t'essayais à jongler, quand tu racontais à mes petits neveux comment tu avais vaincu avec une cuillère quatre bandits en armes. Je t'ai trouvé attachant, avec ta maladresse, qui elle-même s'emmêlait avec ta volonté de bien faire ; maman m'a demandé de t'empêcher d'approcher la vaisselle. Elle ne tenait pas à ce que tu en casses plus. Elle a bien fait, je n'aurais sûrement pas trouvé le courage de t'adresser la parole sinon !</p>
<p>J'avais déjà embrassé Gabriel, l'an dernier, en été. J'étais partie aider ses parents à vendanger un petit bout de terrain sur lequel ils travaillaient à la haute saison. Ça avait été bref, et plus par curiosité qu'autre chose. Pour dire que je l'avais fait, en somme. D'ailleurs, il n'avait pas été très charmant avec moi par la suite, préférant m'ignorer et m'éviter, marmonnant avec ses copains quand il me voyait de loin. Je sais ce qu'ils ont dû se dire. Je ne regrette pas d'avoir mis une claque à sa main baladeuse, alors qu'il aurait dû s'occuper de mes lèvres.</p>
<p>En tout cas, ça ne m'avait pas préparée le moins du monde à ta vue, ta rencontre. On dit que seuls les dragons savent cracher du feu : si ce qu'ils ressentent dans leur ventre ressemble aux frissons que tu as provoqués chez moi, je pense que j'aurais pu accéder à leur domaine et prouver être des leurs sans problème.</p>
<p>Je ne pourrais pas dire, même aujourd'hui, si tu l'as su, si tu t'en es aperçu, ou bien si ta curiosité des autres, ta gentillesse, si tout ça était purement désintéressé. Mais comme je l'ai déjà dit, de toute manière tu n'en as pas profité.</p>
<p>Le mariage fut beau. Tu avais même pu t'habiller dans la coutume, pour l'occasion. Ton écharpe rose t'allait très bien. J'espère que tu l'as gardée, et que tu la portes encore aujourd'hui. Tu as beaucoup chanté, tant et plus. Après la cérémonie, pendant la marche nuptiale, pendant le repas. Je me souviens t'avoir apporté à boire, et je me souviens que tu ralentissais ton jeu tant que j'étais là. Ma sœur n'arrêtait pas de me taquiner. Elle avait peut-être raison non ? Tu ralentissais pour m'inviter à rester un peu plus. Je ne l'ai pas fait, j'étais trop gênée d'être si près de toi, à te porter ton vin.</p>
<p>Pourtant, les garçons ne me mettent pas dans cet état d'habitude : Lewis et Jan, en bas de l'allée, les fils du couvreur, m'appellent « la Foudre » : je frappe toujours d'un coup, j'éclate contre eux et leurs blagues salaces, leurs regards appuyés, leurs réflexions qui pincent et coupent. Maman me dit d'ignorer, ma sœur dit que je ne serai jamais bonne à marier.</p>
<p>Mais toi, tu ralentissais ton luth, et tu ne pouvais me lâcher des yeux. Et si la Foudre est tombée ce soir-là, c'est sûr, rien d'autre que mon cœur je crois.</p>
<p>Je n'arrive pas à me rappeler vraiment ce qu'on s'est dit. Il aura fallu attendre que les festivités soient passées de la danse à la boisson pour qu'on puisse s'éclipser. Nous avons beaucoup discuté, sur ce toit. Tu n'as pas joué pour moi, je ne te l'ai pas demandé. Je n'en avais pas envie. J'avais envie de parler, et tu m'as écouté, chose rare chez un garçon. Je t'ai expliqué ce que je voulais faire de ma vie, que je voulais savoir guérir, panser les plaies du monde. Toi, tu avais mon âge. Tu partais pour le tabernacle de Séraphis. Ta peau hâlée se fondait dans l'obscurité, il n'y avait que tes mots pour m'aider à te situer. J'avais l'impression que tu étais partout à la fois. Je me rappelle avoir fermé les yeux tandis que tu m'expliquais la valeur des souvenirs, surtout ceux qu'on n'a plus. Tu les as comparés à une empreinte dans le sable : on ne connait des souvenirs disparus que la trace que laisse leur absence.</p>
<p>Je crois que c'est moi qui t'ai embrassé. Tu n'as rien demandé, ni sous-entendu ; j'en avais envie, et tu ne me l'as pas refusé quand je te l'ai demandé.</p>
<p>Puis tu m'as rendu mon baiser, signe d'une passion partagée. Et ce baiser avait une saveur, un goût particulier : celui du premier amour, celui qui dit « tu peux être aimé, tu peux aimer ». Qui signifie que tu aimes, et que tu aimeras. Ce baiser que je t'ai demandé, que tu m'as accordé, a scellé en moi la promesse d'un monde où l'amour est possible, où la guerre peut être questionnée par deux âmes bien intentionnées sur un toit, à refaire le monde en regardant les étoiles.</p>
<p>Nous avons passé la nuit ensemble. Au matin, nous avons échangé une dernière embrassade, qui avait un léger parfum de bière, et de larmes. J'étais triste de te voir partir, mais ça n'aurait pas pu marcher entre nous : tu étais trop libre, trop solaire : ça aurait été comme enfermer le soleil dans une jarre, et espérer le voir briller pour toujours. Je ne regrette rien. Ma vie d'avant n'avait pas connu la passion. Ma vie d'après sait la reconnaitre et l'apprécier, grâce à toi.</p>
<p>Notre histoire n'aura jamais vraiment eu lieu hors de cette nuit, étranger, mais désormais, lorsque je reviens dans cette petite allée des Rossignols, voir les amarantes en fleurs éveille en moi un souvenir : je peux aimer et être aimée. Et leur parfum me rappelle le tien, cette sueur et ce sel. Et quand cette ville entière ne sera plus qu'une ville fantôme, quand j'aurai tant aimé, et tant été brisée que je serai faite d'acier, repenser sous la pluie à cette allée suffira à me faire soupirer.</p>
<p>Je ne sais pas ce que tu deviens, étranger. Merci d'avoir été.</p>

    `,
  },

];
