import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'
import ExampleModal from './ExampleModal'
import { Link } from 'react-router-dom'
import { getCities } from '../actions/cities'

class Cities extends React.Component {
    // Gets fired immediately after render()
    // componentDidMount() {
    //     this.props.getCities()
    // }

    linkedCityNames = () => {
        if (this.props.cities.loading === true) {
            return []
        } else {
            return this.props.cities.data.map(city => <p key={city.id}><Link className="text-white" to={`/cities/${city.id}`}>{city.attributes.name}</Link></p>)
        }
    }


    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4 cities-header">Plan Your Next Outdoor Adventure</h1>
                    <p className="lead">Click on one of the cities below to explore nearby parks, climbing gyms, and more!  </p>
                    {/* <hr className="my-4"></hr>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                </div>

            <div className="container cities-container">
            <div className="row cities-row">
                <div className="col-sm cities-column">
                {/* Boulder */}
                <div className="centered-text">
                    {this.linkedCityNames().slice(0,1)}
                </div>
                <img className="city-pic" src='/boulder.jpg' alt="Boulder"></img>
                </div>
                <div className="col-sm cities-column">
                {/* Seattle */}
                    <div className="centered-text">
                    {this.linkedCityNames().slice(1,2)}
                    </div>
                    <img className="city-pic" src='seattle.jpg' alt="Seattle"></img>
                </div>
                <div className="col-sm cities-column">
                <div className="centered-text">
                {/* Reno */}  
                    {this.linkedCityNames().slice(2,3)}
                </div>
                <img className="city-pic" src='reno.jpg' alt="Reno"></img>
                </div>
            </div>
            <div className="row cities-row">
                <div className="col-sm cities-column">
                <div className="centered-text">
                {/* Portland */} 
                    {this.linkedCityNames().slice(3,4)}
                </div>
                    <img className="city-pic" src='portland.jpg' alt="Portland"></img>
                </div>
                <div className="col-sm cities-column">
                <div className="centered-text">
                {/* Asheville */} 
                    {this.linkedCityNames().slice(4,5)}
                </div>
                <img className="city-pic" src='asheville.jpg' alt="Asheville"></img>
                </div>
                <div className="col-sm cities-column">
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

const mapDispatchToProps = (dispatch) => {
    return (
        {
            loadingCities: () => {
                dispatch({
                    type: 'LOADING_CITIES',
                })
            }
        }
    )
}
            

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Cities))