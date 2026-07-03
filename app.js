import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBWqqE6-AXGtaR0Gk--x4aYQTwEEcZ2hVY",
  authDomain: "prayer-room-c9232.firebaseapp.com",
  projectId: "prayer-room-c9232",
  storageBucket: "prayer-room-c9232.firebasestorage.app",
  messagingSenderId: "637664120720",
  appId: "1:637664120720:web:88df3f60aca44d2bdcad15"
};

// Initialisation
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Charger les données
async function chargerContenu() {
  try {
    const ref = doc(db, "Contenu", "principal");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();

      document.getElementById("verse").innerText =
        data.verset || "Aucun verset";

      document.getElementById("prayer").innerText =
        data.losambo || "Aucune prière";

    } else {
      document.getElementById("verse").innerText = "Document introuvable";
      document.getElementById("prayer").innerText = "Document introuvable";
    }
  } catch (error) {
    console.error(error);
    document.getElementById("verse").innerText = "Erreur de connexion";
    document.getElementById("prayer").innerText = "Erreur de connexion";
  }
}

chargerContenu();

// Bouton Live
window.openLive = function () {
  window.open("https://youtube.com", "_blank");
};
