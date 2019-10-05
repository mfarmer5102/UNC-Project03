//FIREBASE SETUP#########################################################################
console.log("IN AUTH");
var firebaseConfig = {
  apiKey: "AIzaSyCI_SxzntQv8nO8JNxpYUOOakZCwIAmBXk",
  authDomain: "networthy-36c14.firebaseapp.com",
  databaseURL: "https://networthy-36c14.firebaseio.com",
  projectId: "networthy-36c14",
  storageBucket: "",
  messagingSenderId: "1063101103669",
  appId: "1:1063101103669:web:df1a9e71bbbe2eec223b7c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Realtime listener
firebase.auth().onAuthStateChanged(function(firebaseUser) {
  if (firebaseUser) {
    console.log(firebaseUser);
    window.location.replace("/");
  } else {
    console.log("not logged in");
  }
});

//VARIABLES##############################################################################

var inputEmail = document.getElementById("inputEmail");
var inputPassword = document.getElementById("inputPassword");
var loginButton = document.getElementById("loginButton");
var signUpButton = document.getElementById("signUpButton");
console.log(loginButton);

//EVENT LISTENERS########################################################################

//Login
$(document).on("submit", "#loginForm", function() {
  event.preventDefault();
  var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch(function(error) {
    if (error.message === "The email address is badly formatted.") {
      M.toast({ html: "The email provided is not a valid email address." });
    } else if (
      error.message ===
      "There is no user record corresponding to this identifier. The user may have been deleted."
    ) {
      M.toast({ html: "The entered email address is incorrect." });
    } else if (
      error.message ===
      "The password is invalid or the user does not have a password."
    ) {
      M.toast({ html: "The entered password is incorrect." });
    }
  });
});

//Sign up
signUpButton.addEventListener("click", function(e) {
  console.log(e);
  var email = inputEmail.value;
  var pass = inputPassword.value;
  var auth = firebase.auth();

  var promise = auth.createUserWithEmailAndPassword(email, pass);
  promise
    //.then(user => console.log(user))
    .catch(function(e) {
      console.log(e.message);
    });
});

//Continue as guest
guestButton.addEventListener("click", function(e) {
  console.log(e);
  var email = "guest@email.com";
  var pass = "guest1";
  var auth = firebase.auth();

  var promise = auth.signInWithEmailAndPassword(email, pass);
  promise
    //.then(user => console.log(user))
    .catch(function(e) {
      console.log(e.message);
    });
});

//Materialize Intialization##############################################################################
M.AutoInit();
