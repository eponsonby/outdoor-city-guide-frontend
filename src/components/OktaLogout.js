import React, { Component } from "react";
import { withOktaAuth } from "@okta/okta-react";

class OktaLogout extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    // Read idToken before local session is cleared
    const idToken = this.props.authState.idToken;
    // Clear local session
    await this.props.authService.logout("/");

    // Clear remote session
    const redirectUri = "http://localhost:3000";
    const issuer = "https://dev-803649.okta.com/oauth2/default";
    window.location.href = `${issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=${redirectUri}`;
  }

  render() {
    return (
      <a href="javascript: void 0" className="nav-link" onClick={this.logout}>
        Log Out with Okta
      </a>
    );
  }
}

// withOktaAuth() makes Okta "authService" object available
// as "this.props.authService"
OktaLogout = withOktaAuth(OktaLogout);
export default OktaLogout;
