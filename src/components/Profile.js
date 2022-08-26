import React, { Component } from "react";

async function checkUser() {
  if (this.props.authState.isAuthenticated && !this.state.userInfo) {
    const userInfo = await this.props.authService.getUser();
    if (this._isMounted) {
      this.setState({ userInfo });
    }
  }
}

  class Profile extends Component {
    _isMounted = false;

    constructor(props) {
      super(props);
      this.state = { userInfo: null };
      this.checkUser = checkUser.bind(this);
    }

    async componentDidMount() {
      this._isMounted = true;
      this.checkUser();
    }

    async componentDidUpdate() {
      this._isMounted = true;
      this.checkUser();
    }

    componentWillUnmount() {
      this._isMounted = false;
    }

    render() {
      return (
        <div>
          {this.state.userInfo && (
            <div>
              <p>Welcome back, {this.state.userInfo.name}!</p>
            </div>
          )}
        </div>
      );
    }
  }

  export default Profile
