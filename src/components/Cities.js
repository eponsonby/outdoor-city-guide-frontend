import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

class Cities extends React.Component {

    linkedCityNames = () => {
        if (this.props.cities.loading === true) {
            return []
        } else {
            return this.props.cities.data.map(city => <p key={city.id}><Link to={`/cities/${city.id}/parks`}>{city.attributes.name}</Link></p>)
        }
    }


    render() {
        return (
            <div>
                <br></br><br></br>
            <h1 className="cities-header">Welcome to the Outdoor City Guide</h1>
            <p className="cities-welcome-text">Click on one of the cities below to see parks, climbing gyms and more!</p>
            <br></br><br></br>
            <div className="container cities-container">
            <div className="row cities-row">
                <div className="col cities-column">
                {/* Boulder */}
                <div className="centered-text">
                    {this.linkedCityNames().slice(0,1)}
                </div>
                <img className="city-pic" src='boulder.jpg' alt="Boulder"></img>
                </div>
                <div className="col col-md-offset-1 cities-column">
                {/* Seattle */}
                    <div className="centered-text">
                    {this.linkedCityNames().slice(1,2)}
                    </div>
                    <img className="city-pic" src='seattle.jpg' alt="Seattle"></img>
                </div>
                <div className="col col-md-offset-1 cities-column">
                <div className="centered-text">
                {/* Reno */}  
                    {this.linkedCityNames().slice(2,3)}
                </div>
                <img className="city-pic" src='reno.jpg' alt="Reno"></img>
                </div>
            </div>
            <div className="row cities-row">
                <div className="col cities-column">
                <div className="centered-text">
                {/* Portland */} 
                    {this.linkedCityNames().slice(3,4)}
                </div>
                    <img className="city-pic" src='portland.jpg' alt="Portland"></img>
                </div>
                <div className="col col-md-offset-1 cities-column">
                <div className="centered-text">
                {/* Ashevillve */} 
                    {this.linkedCityNames().slice(4,5)}
                </div>
                <img className="city-pic" src='asheville.jpg' alt="Asheville"></img>
                </div>
                <div className="col col-md-offset-1 cities-column">
                <div className="centered-text">
                {/* Salt Lake City */} 
                    {this.linkedCityNames().slice(5)}
                </div>
                <img className="city-pic" src='salt-lake-city.jpg' alt="Salt Lake City"></img>
                </div>
            </div>
        </div> 
        </div>


        )
    }

}



const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default withRouter(connect(mapStateToProps)(Cities))