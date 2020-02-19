import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
// import MainContainer from './components/MainContainer';
import Login from './components/Login'
import Logout from './components/Logout'
import Signup from './components/Signup'
import Cities from './components/Cities'
import { BrowserRouter as Router, Route} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <Logout/>
        <Navbar/>
        <Router>
          <div>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path = '/cities' component={Cities}/>
          </div>
        </Router>

      </div>
      
      // <MainContainer/>
    )
  }
}



export default connect(null, { getCurrentUser })(App);
