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
    return (
      <div class="full-height">
        <header className="App-header">
          {user ? <Main /> : <p>Please sign in.</p>}
          {user ? (
            <button onClick={signOut}>Sign out</button>
          ) : (
            <button onClick={signInWithGoogle}>Sign in with Google</button>
          )}
        </header>
      </div>
    );
  };
}

export default withFirebaseAuth({
  providers,
  firebaseAppAuth
})(App);
