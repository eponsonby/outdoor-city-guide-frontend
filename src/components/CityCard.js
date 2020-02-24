import React from 'react'
import { getNationalParks } from '../actions/parks'
import { getLocalParks } from '../actions/localParks'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'


//add loading functionality

class CityCard extends React.Component {

    componentDidMount() {
        this.props.getNationalParks()
        this.props.getLocalParks(this.props.city.attributes.name)
    }

    getNatParkInfo = () => {
        const selectedParks = this.props.parks.length > 0 ? this.props.parks.filter(park => park.states === this.props.city.attributes.state) : "nothing"
        if (selectedParks !== "nothing") {
            const desiredContent = selectedParks.map(park => ({description: park.description, name: park.fullName, url: park.url}))
            return desiredContent.map(park => <div><h1>{park.name}</h1> <p>{park.description}</p></div>)
        } else {
            return null
        }

    }

    getClimbingGymInfo = () => {
        const climbingGymsFromState = this.props.city.attributes.climbing_gyms
        const climbingGymText = climbingGymsFromState.map(cg => <div><p>{cg.name}</p><p>{cg.street}</p><p>{cg.city.name}, {cg.state}</p><p>{cg.zip}</p></div>)
        return climbingGymText
    }

    render() {
        return (
            <div>
            <section>
                <h1>{this.props.city.attributes.name}</h1>
                <div className="row">
                    <div className="col-md-6">
                        <h3>Nearby Parks and Recreation Areas</h3>
                        {this.getNatParkInfo()}
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
        parks: state.parks
        // localParks: state.localParks
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