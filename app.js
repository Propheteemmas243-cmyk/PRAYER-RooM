const verses = [
  "L'Éternel est mon berger, je ne manquerai de rien.",
  "Tout est possible à celui qui croit.",
  "Dieu est amour.",
  "Confie-toi en l'Éternel de tout ton cœur.",
  "Le Seigneur est ma lumière et mon salut."
];

const prayers = [
  "Seigneur, dirige ma journée et mes décisions.",
  "Dieu, remplis-moi de paix et de sagesse.",
  "Saint-Esprit, guide mes pas aujourd’hui.",
  "Seigneur, garde mon cœur dans la foi.",
  "Père, que ta volonté soit faite dans ma vie."
];

// Choisir un élément aléatoire
function randomItem(list) {
  return list[Math.floor(Math.random() * list.length)];
}

// Affichage verset + prière
document.getElementById("verse").innerText = randomItem(verses);
document.getElementById("prayer").innerText = randomItem(prayers);

// LIVE
function openLive() {
  window.open("https://youtube.com", "_blank");
}
