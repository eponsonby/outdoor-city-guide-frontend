import React from 'react';
// import './App.css';
import Navbar from './components/Navbar'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import Login from './components/Login'
// import Logout from './components/Logout'
import Signup from './components/Signup'
import Cities from './components/Cities'
import Home from './components/Home'
import ParksContainer from './components/ParksContainer'
import ClimbingGyms from './components/ClimbingGyms'
import OutdoorStores from './components/OutdoorStores'
import { Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedIn = this.props.loggedIn

    return (
      <div className="container">
        {loggedIn ? <Navbar/> : <Home/> }
          <Switch>
            <Route exact path='/cities' component={Cities}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/>
            <Route exact path='/cities/:id/parks'
            render={(props) => {
                let city = this.props.cities.data.length > 0 ? this.props.cities.data.find(city => city.id === props.match.params.id) : null
                return city !== null ? <ParksContainer city={city}/> : <p>Error</p>
              }
            }/>
            <Route exact path='/cities/:id/climbing-gyms'
            render={(props) => {
              let city = this.props.cities.data.length > 0 ? this.props.cities.data.find(city => city.id === props.match.params.id) : null
              return city !== null ? <ClimbingGyms city={city}/> : <p>Error</p>
              }
            }/>
            <Route exact path='/cities/:id/outdoor-stores'
            render={(props) => {
              let city = this.props.cities.data.length > 0 ? this.props.cities.data.find(city => city.id === props.match.params.id) : null
              return city !== null ? <OutdoorStores city={city}/> : <p>Error</p>
              }
            }/>
          </Switch>
      </div>
      
    )
  }
}


const mapStateToProps = state => {
  return  ({
    loggedIn: !!state.currentUser,
    cities: state.cities
  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
