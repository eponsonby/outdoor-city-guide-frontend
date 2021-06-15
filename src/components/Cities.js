import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Cities extends React.Component {
  mapCityImages = (cityName) => {
    switch (cityName) {
      case "Boulder":
        return "/boulder.jpg";
      case "Seattle":
        return "/seattle.jpg";
      case "Reno":
        return "/reno.jpg";
      case "Portland":
        return "/portland.jpg";
      case "Asheville":
        return "/asheville.jpg";
      case "Salt Lake City":
        return "/salt-lake-city.jpg";
      default:
        return "Error in mapCityImages";
    }
  };

  createCards = () => {
    if (this.props.cities.loading === true) {
      return [];
    } else {
      return this.props.cities.data.map((city) => (
        <div key={city.id}>
          <div className="col mb-4">
            <div className="card h-150 text-center">
              <img
                src={this.mapCityImages(city.attributes.name)}
                className="card-img-top"
                alt="..."
              ></img>
              <div className="card-body">
                <h5 className="card-title card-city-name">
                  <a href={`/cities/${city.id}`}>{city.attributes.name}</a>
                </h5>
              </div>
            </div>
          </div>
        </div>
      ));
    }
  };

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1 className="display-4 cities-header">
            Plan Your Next Outdoor Adventure
          </h1>
          <p className="lead">
            Click on one of the cities below to explore nearby parks, climbing
            gyms, and more!{" "}
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-3">{this.createCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities,
  };
};

export default withRouter(connect(mapStateToProps)(Cities));
