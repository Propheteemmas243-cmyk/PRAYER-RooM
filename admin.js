import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getFirestore, doc, updateDoc } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

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

const ref = doc(db, "app", "principal");

// 🔐 MOT DE PASSE SIMPLE
const ADMIN_PASSWORD = "1234"; // tu peux changer

window.checkPassword = function () {
  const input = document.getElementById("password").value;

  if (input === ADMIN_PASSWORD) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
  } else {
    alert("Mot de passe incorrect ❌");
  }
};

// 🔥 UPDATE
window.updateVerset = async function () {
  const val = document.getElementById("versetInput").value;
  await updateDoc(ref, { verset: val });
  alert("OK ✔️");
};

window.updateLosambo = async function () {
  const val = document.getElementById("losamboInput").value;
  await updateDoc(ref, { losambo: val });
  alert("OK ✔️");
};

window.updateLive = async function () {
  const val = document.getElementById("liveInput").value;
  await updateDoc(ref, { live: val });
  alert("OK ✔️");
};
