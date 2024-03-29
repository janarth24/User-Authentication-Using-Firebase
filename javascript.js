import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut
} from "https://www.gstatic.com/firebasejs/9.19.1/firebase-auth.js";;


const firebaseConfig = {
  apiKey: "AIzaSyDoGbODDkVNneyDuJ1Qfamu5_RmY25W614",
  authDomain: "register-with-firebase-a9022.firebaseapp.com",
  projectId: "register-with-firebase-a9022",
  storageBucket: "register-with-firebase-a9022.appspot.com",
  messagingSenderId: "191579987544",
  appId: "1:191579987544:web:f26ae77ee1b72ff819742d"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




document.getElementById('reg-btn').addEventListener('click', function() {
  document.getElementById('register-div').style.display = "inline";
  document.getElementById('login-div').style.display = "none";


});


document.getElementById('log-btn').addEventListener('click', function() {
  document.getElementById('register-div').style.display = "none";
  document.getElementById('login-div').style.display = "inline";


});

document.getElementById('login-btn').addEventListener('click', function() {
  const loginEmail = document.getElementById("login-email").value;
  const loginPassword = document.getElementById("login-password").value;

  signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then((userCredential) => {

          const user = userCredential.user;
          document.getElementById('result-box').style.display = "inline";
          document.getElementById('login-div').style.display = "none";
          document.getElementById('res').innerHTML = "Welcome Back<br>" + loginEmail + "was Login Successfully";

      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById('result-box').style.display = "inline";
          document.getElementById('login-div').style.display = "none";
          document.getElementById('result-box').innerHTML = "Sorry !<br>" + errorMessage;
      });

  document.getElementById('reg-btn').addEventListener('click', function() {
      document.getElementById('register-div').style.display = "inline";
      document.getElementById('login-div').style.display = "none";


  });


  document.getElementById('log-btn').addEventListener('click', function() {
      document.getElementById('register-div').style.display = "none";
      document.getElementById('login-div').style.display = "inline";


  });

  // document.getElementById('login-btn').addEventListener('click', function() {
  //     const loginEmail = document.getElementById("login-email").value;
  //     const loginPassword = document.getElementById("login-password").value;

  //     signInWithEmailAndPassword(auth, loginEmail, loginPassword)
  //         .then((userCredential) => {

  //             const user = userCredential.user;
  //             document.getElementById('result-box').style.display = "inline";
  //             document.getElementById('login-div').style.display = "none";
  //             document.getElementById('result-box').innerHTML = "Welcome Back<br>" + loginEmail + "was Login Successfully";

  //         })
  //         .catch((error) => {
  //             const errorCode = error.code;
  //             const errorMessage = error.message;
  //             document.getElementById('result-box').style.display = "inline";
  //             document.getElementById('login-div').style.display = "none";
  //             document.getElementById('result-box').innerHTML = "Sorry !<br>" + errorMessage;
  //         });
  // }); /////

});

document.getElementById('register-btn').addEventListener('click', function() {
  const registerEmail = document.getElementById("register-email").value;
  const registerPassword = document.getElementById("register-password").value;

  createUserWithEmailAndPassword(auth, registerEmail, registerPassword)
      .then((userCredential) => {

          const user = userCredential.user;
          document.getElementById('result-box').style.display = "inline";
          document.getElementById('register-div').style.display = "none";
          document.getElementById('result-box').innerHTML = "Welcome <br>" + registerEmail + " was Registered Successfully";

      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          document.getElementById('result-box').style.display = "inline";
          document.getElementById('register-div').style.display = "none";
          document.getElementById('result-box').innerHTML = "Sorry !<br>" + errorMessage;
      });


});



document.getElementById('log-out-btn').addEventListener('click', function() {
  signOut(auth).then(() => {
      document.getElementById('result-box').style.display = "none";
      document.getElementById('login-div').style.display = "inline";
      // Sign-out successful.
  }).catch((error) => {
      document.getElementById('result').innerHTML = "Sorry !<br>" + errorMessage;
      // An error happened.
  });
});