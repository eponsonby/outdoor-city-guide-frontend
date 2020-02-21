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
import CityCard from './components/CityCard'
import { Route, Switch, withRouter} from 'react-router-dom'

class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const loggedIn = this.props.loggedIn
    // const city = this.props.cities.length > 0 ? this.props.cities.find(city => city.id === ) : null 
     // const city = this.props.cities.find(city => city.id)
    // console.log("city", city)
      // === props.match.params.id)
    // console.log(city)
    return (
      <div className="App">
        {loggedIn ? <Navbar/> : <Home/> }
          <Switch>
            <Route exact path='/cities' component={Cities}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/>
            <Route exact path='/cities/:id' render={props => {
              const city = this.props.cities.data.length > 0 ? this.props.cities.data.find(city => city.id === props.match.params.id) : null
              return city !== null ? <CityCard city={city}/> : <p>Error</p>
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
