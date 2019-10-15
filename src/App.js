import React, { Component } from "react";
import Main from "./components/Main";
import withFirebaseAuth from "react-with-firebase-auth";
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebaseConfig";
import logo from "./logo.png";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider()
};

const loginPageStyle = {
  backgroundImage:
    "url('https://images.unsplash.com/photo-1484242780561-6aff8688c36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2000&q=80')",
  backgroundSize: "cover",
  backgroundRepeat: "repeat",
  backgroundAttachment: "fixed",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

const floatingLogoutContainerStyle = {
  position: "relative"
};

const floatingLogoutButtonStyle = {
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: "999"
};

class App extends Component {
  render = () => {
    const { user, signOut, signInWithGoogle } = this.props;
    if (user) {
      localStorage.setItem("activeUserUUID", user.uid);
    }
    return (
      <div class="full-height">
        {user ? (
          <div class="full-height" style={floatingLogoutContainerStyle}>
            <div style={floatingLogoutButtonStyle}>
              <button className="btn" onClick={signOut}>
                <i class="fas fa-sign-out-alt fa-2x border rounded-circle p-2 text-primary"></i>
              </button>
            </div>
            <Main />
          </div>
        ) : (
          <div class="full-height">
            <div class="full-height" style={loginPageStyle}>
              <div class="text-center card p-3 border rounded shadow animated fadeInDownBig">
                <img src={logo} height="200px" width="200px"></img>
                <button className="btn btn-danger" onClick={signInWithGoogle}>
                  <i class="fab fa-google border rounded-circle p-2"></i> Sign
                  in with Google
                </button>
              </div>
            </div>
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
