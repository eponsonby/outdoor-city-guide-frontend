import React, { Component } from "react";
// import { connect } from "react-redux";
import Logout from "./Logout";
import Login from "./Login";
import Signup from "./Signup";
import { withOktaAuth } from "@okta/okta-react";

export default withOktaAuth(
  class Navbar extends Component {
    render() {
      return (
        <div className="main-navbar-container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/cities"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Cities
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="/cities/1">
                      Boulder
                    </a>
                    <a className="dropdown-item" href="/cities/2">
                      Seattle
                    </a>
                    <a className="dropdown-item" href="/cities/3">
                      Reno
                    </a>
                    <a className="dropdown-item" href="/cities/4">
                      Portland
                    </a>
                    <a className="dropdown-item" href="/cities/5">
                      Asheville
                    </a>
                    <a className="dropdown-item" href="/cities/6">
                      Salt Lake City
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  {this.props.authState.isAuthenticated ? (
                    <Logout />
                  ) : (
                    <Login />
                  )}
                </li>
                <li className="nav-item">
                  {this.props.authState.isAuthenticated ? null : <Signup />}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      );
    }
  }
);

// const mapStateToProps = (state) => {
//   return {
//     currentUser: state.currentUser,
//     loggedIn: !!state.currentUser,
//   };
// };
