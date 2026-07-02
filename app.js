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

async function loadContent() {
  try {
    const ref = doc(db, "content", "main");
    const snap = await getDoc(ref);

    if (snap.exists()) {
      const data = snap.data();

      document.getElementById("verse").innerText = data.verse;
      document.getElementById("prayer").innerText = data.prayer;
    } else {
      document.getElementById("verse").innerText = "Aucune donnée";
      document.getElementById("prayer").innerText = "Aucune donnée";
    }
  } catch (e) {
    console.error(e);
  }
}

loadContent();

window.openLive = function () {
  window.open("https://youtube.com", "_blank");
};
