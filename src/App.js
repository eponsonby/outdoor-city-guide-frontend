import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Login from './components/Login'
// import Logout from './components/Logout'
import Signup from './components/Signup'
import Cities from './components/Cities'
import Home from './components/Home'
import { Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedIn = this.props.loggedIn

    return (
      <div className="App">
        {loggedIn ? <Navbar/> : null }
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/>
            <Route exact path='/cities' component={Cities}/>
            <Route exact path='/' render={(props) => loggedIn ? <Cities/> : <Home/>}/>
          </Switch>
      </div>
      
    )
  }
}

const mapStateToProps = state => {
  return  ({
    loggedIn: !!state.currentUser
  })
}


export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
