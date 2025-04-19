// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAu5Fbzs-Eq8uNLrPvWa92oJ_D2OdQoA6k",
  authDomain: "techpathsala-5bd9d.firebaseapp.com",
  projectId: "techpathsala-5bd9d",
  storageBucket: "techpathsala-5bd9d.firebasestorage.app",
  messagingSenderId: "85465543188",
  appId: "1:85465543188:web:841db864d4aacd97dd2d01",
  measurementId: "G-0E3BPQVNCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

