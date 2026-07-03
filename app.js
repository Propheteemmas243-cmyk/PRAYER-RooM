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

// 📡 CHARGER CONTENU
async function chargerContenu() {
  try {
    const ref = doc(db, "app", "principal");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();

      // 📖 contenu
      document.getElementById("verse").innerText = data.verset || "Aucun verset";
      document.getElementById("prayer").innerText = data.losambo || "Aucune prière";

      // 🎨 DESIGN DYNAMIQUE
      if (data.background) {
        document.body.style.backgroundImage = `url(${data.background})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
      }

      if (data.font) {
        document.body.style.fontFamily = data.font;
      }

      if (data.textColor) {
        document.body.style.color = data.textColor;
      }

      // 🌐 GLOBAL DATA
      window.appData = data;
    }

  } catch (error) {
    console.error("Erreur Firebase :", error);
  }
}

chargerContenu();

// 🔴 LIVE
window.openLive = function () {
  window.open(window.appData?.live || "https://youtube.com", "_blank");
};

// 📝 REQUÊTES
window.openRequest = function () {
  window.location.href = "requests.html";
};

// 📚 LIVRE
window.openBook = function () {
  window.location.href = "book.html";
};

// 💰 SOUTIEN
window.openSupport = function () {
  window.location.href = "support.html";
};
