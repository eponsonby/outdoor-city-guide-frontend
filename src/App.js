import React from "react";
import { connect } from "react-redux";
import { getCities } from "./actions/cities";
import Navbar from "./components/Navbar";
import Cities from "./components/Cities";
import Profile from "./components/Profile";
import ParksContainer from "./components/ParksContainer";
import ClimbingGymsContainer from "./components/ClimbingGymsContainer";
import CitiesHomePage from "./components/CitiesHomePage";
import OutdoorStoresContainer from "./components/OutdoorStoresContainer";
import { Route, Switch, withRouter } from "react-router-dom";


class App extends React.Component {
  componentDidMount() {
    this.props.getCities();
  }

  render() {
    return (
      <div className="container">
            <Navbar />
            <Route exact path="/" component={Cities} />
            <Route exact path="/profile" component={Profile} />
            <Route
              exact
              path="/cities/:id"
              render={(props) => {
                let city =
                  this.props.cities.data.length > 0
                    ? this.props.cities.data.find(
                        (city) => city.id === props.match.params.id
                      )
                    : null;
                return city !== null ? (
                  <CitiesHomePage city={city} />
                ) : (
                  <p>Loading...</p>
                );
              }}
            />
            <Route
              exact
              path="/cities/:id/parks"
              render={(props) => {
                let city =
                  this.props.cities.data.length > 0
                    ? this.props.cities.data.find(
                        (city) => city.id === props.match.params.id
                      )
                    : null;
                return city !== null ? (
                  <ParksContainer city={city} />
                ) : (
                  <p>Loading...</p>
                );
              }}
            />
            <Route
              exact
              path="/cities/:id/climbing-gyms"
              render={(props) => {
                let city =
                  this.props.cities.data.length > 0
                    ? this.props.cities.data.find(
                        (city) => city.id === props.match.params.id
                      )
                    : null;
                return city !== null ? (
                  <ClimbingGymsContainer city={city} />
                ) : (
                  <p>Loading...</p>
                );
              }}
            />
            <Route
              exact
              path="/cities/:id/outdoor-stores"
              render={(props) => {
                let city =
                  this.props.cities.data.length > 0
                    ? this.props.cities.data.find(
                        (city) => city.id === props.match.params.id
                      )
                    : null;
                return city !== null ? (
                  <OutdoorStoresContainer city={city} />
                ) : (
                  <p>Loading...</p>
                );
              }}
            />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCities: () => {
      dispatch(getCities());
    },
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
