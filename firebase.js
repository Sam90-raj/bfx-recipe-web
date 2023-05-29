import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyCyAS9mLEtA3IuG4vaaXBapD2YUU9xavoU",
  authDomain: "recipeduniya-f2ff6.firebaseapp.com",
  projectId: "recipeduniya-f2ff6",
  storageBucket: "recipeduniya-f2ff6.appspot.com",
  messagingSenderId: "837883307025",
  appId: "1:837883307025:web:92bb7800c2ab9f242bbdb0",
  measurementId: "G-FP3KV10VZN",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
const auth = getAuth(app);

document.getElementById("signup").addEventListener("click", async (event) => {
  event.preventDefault();
  const email = await document.getElementById("email-signup").value;
  const password = await document.getElementById("password-signup").value;
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("User Created!");
      location.assign("main.html");
    })
    .catch((error) => {
      const error_code = error.code;
      const error_message = error.message;
      console.log(error_message);
      alert(error);
    });
});

document.getElementById("login").addEventListener("click", async (event) => {
  event.preventDefault();
  const email = await document.getElementById("email-login").value;
  const password = await document.getElementById("password-login").value;
  await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("You are successfully logged in!");
      location.assign("main.html");
    })
    .catch((error) => {
      const error_code = error.code;
      const error_message = error.message;
      console.log(error_message);
      alert(error);
    });
});

// document.getElementById("logout").addEventListener("click", function () {
//   signOut(auth)
//     .then(() => {
//       alert("You are successfully signed out!");
//     })
//     .catch((error) => {
//       console.log("An error occurred.");
//     });
// });

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid;
//   }
// });
