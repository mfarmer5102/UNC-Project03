import React, { Component } from "react";
import Main from "./components/Main";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

class App extends Component {
  render = () => {
    const { user, signOut, signInWithGoogle } = this.props;
    if (user) {
      console.log(user.uid);
      localStorage.setItem("activeUserUUID", user.uid);
    }
    return (
      <div class="full-height">
          {user ? (
            <div class="full-height">
              <nav class="navbar navbar-light bg-secondary text-light">
                <span class="navbar-brand mb-0 h1 text-light">Networthy</span>
                <button className="btn btn-primary" onClick={signOut}>
                  Sign out
                </button>
              </nav>
              <Main />
            </div>
          ) : (
            <div class="full-height">
              <nav class="navbar navbar-light bg-secondary text-light">
                <span class="navbar-brand mb-0 h1 text-light">Navbar</span>
                <button className="btn btn-primary" onClick={signInWithGoogle}>
                  Sign in with Google
                </button>
              </nav>
            </div>
          )}
      </div>
    );
  };
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
