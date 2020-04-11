import React from 'react';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser'
import { getCities } from './actions/cities'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
import Cities from './components/Cities'
import ParksContainer from './components/ParksContainer'
import ClimbingGyms from './components/ClimbingGyms'
import CitiesHomePage from './components/CitiesHomePage'
import OutdoorStoresContainer from './components/OutdoorStoresContainer'
import { Route, Switch, withRouter} from 'react-router-dom'


class App extends React.Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getCities()
  }

  render() {
    const loggedIn = this.props.loggedIn

    return (
      <div className="container">
        <Navbar/>
          <Switch>
            <Route exact path='/' component={Cities}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={(props) => <Signup history={props.history}/>}/>
            <Route exact path='/cities/:id'
            render={(props) => {
                let city = this.props.cities.data.length > 0 ? this.props.cities.data.find(city => city.id === props.match.params.id) : null
                return city !== null ? <CitiesHomePage city={city}/> : <p>Error</p>
              }
            }/>
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
              return city !== null ? <OutdoorStoresContainer city={city}/> : <p>Error</p>
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

const mapDispatchToProps = (dispatch) => {
  return (
      {
          getCities: () => {
              dispatch(getCities())
          },
          getCurrentUser: () => {
              dispatch(getCurrentUser())
          }
      }
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
