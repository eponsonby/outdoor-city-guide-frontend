import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Navbar/>
    )
  }
}



export default connect(null, { getCurrentUser })(App);
