//FIREBASE SETUP########################################################################

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
    // if (firebaseUser.email === "johnsmith@email.com") {
    //   $("#loggedInIndicator").text("Guest User");
    // } else {
    //   $("#loggedInIndicator").text(firebaseUser.email);
    // }
  } else {
    console.log("not logged in");
    window.location.replace("/login");
  }
});

//VARIABLES##############################################################################

var logoutButton = document.getElementById("logoutButton");

//EVENT LISTENERS########################################################################

//Log out
logoutButton.addEventListener("click", function(e) {
  console.log(e);
  firebase.auth().signOut();
});
