import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

// 🔥 Firebase config (UNE SEULE FOIS)
const firebaseConfig = {
  apiKey: "AIzaSyBWqqE6-AXGtaR0Gk--x4aYQTwEEcZ2hVY",
  authDomain: "prayer-room-c9232.firebaseapp.com",
  projectId: "prayer-room-c9232",
  storageBucket: "prayer-room-c9232.firebasestorage.app",
  messagingSenderId: "637664120720",
  appId: "1:637664120720:web:88df3f60aca44d2bdcad15"
};

// Init Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🔴 LIVE BUTTON
window.openLive = function () {
  window.open("https://youtube.com", "_blank");
};

// 📖 Charger données Firestore
async function loadContent() {
  try {
    const ref = doc(db, "content", "main");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();

      document.getElementById("verse").innerText =
        data.verse || "Pas de verset";

      document.getElementById("prayer").innerText =
        data.prayer || "Pas de prière";

      // Live dynamique plus tard
    } else {
      console.log("Aucune donnée trouvée dans Firestore");
    }
  } catch (error) {
    console.error("Erreur Firestore:", error);
  }
}

loadContent();
