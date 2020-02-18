import React from 'react';
import './App.css';
import Login from './components/Login'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {
  componentDidMount() {
    getCurrentUser()
  }
  render() {
  return (
    <div>
      <Login/>
    </div>
  );
}
}

export default connect(null, { getCurrentUser })(App);
