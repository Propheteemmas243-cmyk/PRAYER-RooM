import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBWqqE6-AXGtaR0Gk--x4aYQTwEEcZ2hVY",
  authDomain: "prayer-room-c9232.firebaseapp.com",
  projectId: "prayer-room-c9232",
  storageBucket: "prayer-room-c9232.firebasestorage.app",
  messagingSenderId: "637664120720",
  appId: "1:637664120720:web:88df3f60aca44d2bdcad15"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let dataGlobal = {};

async function chargerContenu() {
  try {
    const ref = doc(db, "app", "principal");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();
      dataGlobal = data;

      document.getElementById("verse").innerText = data.verset || "Aucun verset";
      document.getElementById("prayer").innerText = data.losambo || "Aucune prière";

    } else {
      document.getElementById("verse").innerText = "Aucun contenu";
      document.getElementById("prayer").innerText = "Aucune prière";
    }

  } catch (error) {
    console.error(error);
    document.getElementById("verse").innerText = "Erreur";
    document.getElementById("prayer").innerText = "Erreur";
  }
}

chargerContenu();

// 🔴 LIVE
window.openLive = function () {
  window.open(dataGlobal.live || "https://youtube.com", "_blank");
};

// 📚 LIVRE
window.openBook = function () {
  window.open(dataGlobal.livre || "#", "_blank");
};

// 💰 SOUTIEN
window.openSupport = function () {
  window.open(dataGlobal.soutien || "#", "_blank");
};

// 📝 REQUÊTES
window.openRequest = function () {
  alert("Fonction requête à connecter plus tard 🙏");
};
