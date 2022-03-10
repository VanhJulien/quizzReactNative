const data = [
  [
    {
        question: "Quel est le nom du 46eme président des Etats-Unis ?",
        options: ["Joe Biden","Donald Trump","Barack Obama","George W. Bush"],
        correct_option: "Joe Biden"
    },
    {
        question: "Quelle est la capitale du Sri Lanka ?",
        options: ["Tananarive","Colombo","Sri Jayawardenapura Kotte","Vientiane"],
        correct_option: "Sri Jayawardenapura Kotte"
    },
    {
        question: "En quelle année est mort Jacques Chirac ?",
        options: ["2018","2019","2017","2020"],
        correct_option: "2019"
    },
    {
        question: "Combien y a-t-il d'états membres dans l'union européenne ? ",
        options: ["24","29","26","27"],
        correct_option: "27"
    },
    {
        question: "Quelle est la planète la plus éloignée du soleil ?",
        options: ["Uranus","Pluton","Neptune","Venus"],
        correct_option: "Neptune"
    },
    {
        question: "Quel célèbre dictateur dirigea l’URSS du milieu des années 1920 à 1953 ?",
    options: ["Molotov","Trotski","Staline","Lénine"],
        correct_option: "Staline"
    },
    {
        question: "Quel pays a remporté la coupe du monde de football en 2014 ",
        options: ["L'Argentine","L'Italie","L'Allemagne","Le Brésil"],
        correct_option: "L'Allemagne"
    },
    {
        question: "Qui était le dieu de la guerre dans la mythologie grecque ? ",
        options: ["Arès","Hermès","Hadès","Apollon"],
        correct_option: "Arès"
    },
    {
        question: "Quel est le plus long fleuve de France selon la partie coulant sur le territoire ",
        options: ["Le Rhône","La Loire","Le Rhin","La Seine"],
        correct_option: "Le Rhône"
    },
    {
        question: "Quel ville est surnommé « big Apple » aux USA ? ",
        options: ["Washington","Seatle","New York","Los Angeles"],
        correct_option: "New York"
    },
  ],
  [
    {
        question: "Qui est le capitaine de la 11ème division (Bleach)?",
        options: ["Ikkaku Madarame","Toshiro Hitsugaya","Zaraki Kenpachi","Ichigo Kurosaki"],
        correct_option: "Zaraki Kenpachi"
    },
    {
        question: "Quel est le nom du shinigami qui accompagne Misa Amane(DeathNote)",
        options: ["Ryuk","Rem","L","Melo"],
        correct_option: "Rem"
    },
    {
        question: "Quel est le premier corsair que Luffy bat à Alabasta (One Piece)?",
        options: ["Mihawk","Crocodile","Boa Hancock","Baggy Le Clown"],
        correct_option: "Crocodile"
    },
    {
        question: "Quel est le nom du premier Hokage (Naruto)?",
        options: ["Hashirama Senju","Hiruzen Sarutobi","Minato Namikaze","Tobirama Senju"],
        correct_option: "Hashirama Senju"
    },
    {
        question: "Combien d'apparences différentes possède Freezer (Dragon Ball Z) ?",
        options: ["4","7","6","5"],
        correct_option: "7"
    },
    {
      question: "Comment s'appelle le frère de Shawn Frost (Inazuma Eleven) ?",
      options: ["Aiden","Axel","Mark","Jude"],
      correct_option: "Aiden"
    },
    {
      question: "Quel est le vrai nom de famille de Lelouch (Code Geass) ?",
      options: ["Lamperouge","Vi britannia","Benbahlouli","Uzumaki"],
      correct_option: "Vi britannia"
    },
    {
      question: "Comment s'appelle l'équipement des soldats du bataillon d'exploration (SNK) ?",
      options: ["Armure anti-titan","Voltigeur aerodynamique","Dispositif céleste","Équipement tri-dimensionnel"],
      correct_option: "Équipement tri-dimensionnel"
    },
    {
      question: "Compléter les paroles (Pokémon): Quand il faudra passer à l'action ...",
      options: ["Nos amis seront là","Notre amitié triomphera","Je me battrai sans répit","mes pokémons et moi gagnerons"],
      correct_option: "Nos amis seront là"
    },
    {
      question: "Dans l'épisode 1, que fait la jeune fille pour remercier Onizuka (GTO) ?",
      options: ["Un bisou","Un câlin","Offre un cadeau","Jette sa culotte"],
      correct_option: "Jette sa culotte"
    },
  ],
  [
    {
        question: "Vous pensiez vraiment que ça allait être sur de la Culture Informatique.. ?",
        options: ["Oui", "Non"],
        correct_option: "Non"
    },
    {
        question: "Quelle est la taille du brakmar de Benjamin Waston (en mode combat) ?",
        options: ["8cm","22cm","16cm","15cm"],
        correct_option: "22cm"
    },
    {
        question: "Qui parmis les B2 aime le plus se prendre des doigts dans le fion ?",
        options: ["Thibault","Pierrick","Aurélien","Rémi S."],
        correct_option: "Aurélien"
    },
    {
        question: "Qui a les pets les plus odorants ?",
        options: ["Rémi P.","Florimond","Thibault","Aya"],
        correct_option: "Aya"
    },
    {
        question: "Quel est le nom du médecin de la daronne à Aurélien ?",
        options: ["Ambroise Paré","Emile Roux","Johnny Sins","Jean-Paul Escouflaire"],
        correct_option: "Johnny Sins"
    },
    {
        question: "Qui est le meilleur intervenant de l'EPSI (Objectivement) ?",
        options: ["Khalid Gaber","Katayoun Pennec","Rudy Delcambre","Rachid Briki"],
        correct_option: "Khalid Gaber"
    },
    {
      question: "Qui est le pire intervenant de l'EPSI (<3) ?",
      options: ["Nahim Benbalouli","Nahim Benbahlooli","Nahim Benbahlloulli","Nahim Benbahlouli"],
      correct_option: "Nahim Benbahlouli"
    },
    {
      question: "A quoi sert le pack EPSI ?",
      options: ["Obtenir des licences qui expirent l'année prochaine","Obtenir la suite Adobe en milieu d'année","Nous voler plus de thunes","Toutes les propositions"],
      correct_option: "Toutes les propositions"
    },
    {
      question: "Quel est le prenom originel de M.Bouffe ?",
      options: ["Patrick","Patroche","Pierrick","Jean-Pascal"],
      correct_option: "Patrick"
    },
    {
      question: "Qui ne boit pas sa pisse ?",
      options: ["Aurélien","Rémi S.","Rémi P.","Paul"],
      correct_option: "Paul"
    },
    {
      question: "Quel est le secret de Patrick ?",
      options: ["Il a tout le temps la trique","Il est homosexuel avec Aurélien","Il chie en 20s","Il est le sosie officiel de Chewbacca"],
      correct_option: "Il chie en 20s"
    }
  ]
]


export default data 