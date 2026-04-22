// Créer un événement au click sur le hamburger menu pour sortir la sidebar, ranger la sidebar si on reclick dessus

// Ranger la sidebar si on click sur le contenu principal

// BONUS
// Créer en css l'hamburger menu qui se transforme en croix

// Aide
// Priorités en CSS : id > classe > baliseHtml

const button = document.querySelector(".toggle-btn");
console.log(button);
const barre = document.getElementById("side-bar");
const content = document.querySelector(".content");

button.addEventListener("click", () => {
  barre.classList.toggle("showbutton");
  content.classList.toggle("shadow");
});

content.addEventListener("click", () => {
  barre.classList.remove("showbutton");
  content.classList.remove("shadow");
});
