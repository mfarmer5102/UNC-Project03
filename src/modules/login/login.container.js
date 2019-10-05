import React, { Component } from "react";

class LoginContainer extends Component {
  render() {
    return (
      <div class="card" style="width: 350px; padding: 0px; margin: auto">
        <div class="card-header" style="background: rgb(45, 45, 124)">
          <img src="logo.png" style="width: 100%" />
        </div>
        <div class="card-body" style="padding: 40px">
          <form id="loginForm">
            <input id="inputEmail" type="email" placeholder="Email" />
            <input id="inputPassword" type="password" placeholder="Password" />
            <br />
            <br />
            <button
              id="loginButton"
              type="submit"
              class="btn btn-action"
              style="width: 100%; background: rgb(45, 45, 124)"
            >
              Login
            </button>
            <div style="margin-top: 20px; text-align: center">
              Don't have an account? Just enter your desired credentials above
              and click{" "}
              <a id="signUpButton" style="cursor: pointer">
                here
              </a>{" "}
              to register or
              <a id="guestButton" style="cursor: pointer">
                continue as a guest
              </a>
              .
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
