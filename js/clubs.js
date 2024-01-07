// On créé une liste avec les différents clubs

// const = let = var
// clubs c'est une liste qui contient plusieurs "objets" qui contiennent les informations des clubs
const clubs = [
  {
    nom: "Club Argentique",
    image: "img/icon/argentique.svg", // lien vers l'image
    description: "photo , vidéo...",
  },
  {
    nom: "Club Numérique",
    image: "img/icon/numérique.svg",
    description: "Infra & réseau , web , cybersécurité...",
  },
  {
    nom: "Club plante",
    image: "img/icon/plante.svg",
    description: "Bouture , rempotage , entretient ... ",
  },
  {
    nom: "Club cuisine",
    image: "img/icon/cuisine.svg",
    description: "Cuisine , vente...",
  },
  {
    nom: "Club gaming",
    image: "img/icon/gaming.svg",
    description: "Arcade, rétro-découvertes, tournois",
  },
  {
    nom: "Club déco",
    image: "img/icon/déco.svg",
    description: "Macramé , Ballon de basket upcyclé ",
  },
  {
    nom: "Club graph",
    image: "img/icon/graph.svg",
    description: "Dessin , graph ...",
  },
  {
    nom: "Club musique",
    image: "img/icon/musique.svg",
    description: "2h00 à 13h30 - 17h30 à 18h45 ",
  },
];

// Séléctionner ul avec document.querySelector
const ul = document.querySelector("ul");

// Boucle for of sur les clubs

for (const club of clubs) {
  var element = document.createElement("li");
  element.innerHTML = `
    <img src="${club.image}" />
    <div>
      <h1>${club.nom}</h1>
      <span>${club.description}</span>
    </div>
  `;

  ul.appendChild(element);
}


