import React, { Component } from "react";
import { connect } from "react-redux";
import { logout } from "../actions/currentUser";
import { withRouter } from "react-router-dom";

class Logout extends Component {
  render() {
    return (
      <a
        className="nav-link"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          this.props.logout();
          this.props.history.push("/");
        }}
      >
        Log Out
      </a>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: (params) => dispatch(logout(params)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(Logout));
