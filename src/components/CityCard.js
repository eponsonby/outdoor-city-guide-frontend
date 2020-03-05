import React from 'react'
import { getNationalParks } from '../actions/parks'
import { getLocalParks } from '../actions/localParks'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'


//add loading functionality

class CityCard extends React.Component {


    render() {
        return (
            <div>

            <section>
                <h1>{this.props.city.attributes.name}</h1>

                <div className="row">
                    <div className="col-md-6">
                        <h3>Nearby Parks and Recreation Areas</h3>
                        {this.getNatParkInfo()}
                        {this.getLocalParkInfo()}
                    </div>
                    <div className="col-md-3">
                        <h3>Activities Loved By Locals</h3>
                    </div>
                    <div className="col-md-3">
                        <h3>Breweries</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <h3>Outdoor Stores</h3>
                    </div>
                    <div className="col-md-4">
                        <h3>Climbing Gyms</h3>
                        {this.getClimbingGymInfo()}
                    </div>
                    <div className="col-md-4">
                        <h3>Other Things To Do</h3>
                    </div>
                </div>
            </section>            
                
            </div>
            )
    }
}

const mapStateToProps = (state) => {
    return {
        parks: state.parks,
        localParks: state.localParks
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            getNationalParks: () => {
                dispatch(getNationalParks())
            },
            getLocalParks: (city) => {
                dispatch(getLocalParks(city))
            }
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCard)