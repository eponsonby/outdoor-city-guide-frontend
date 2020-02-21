import React from 'react'
import { getNationalParks } from '../actions/parks'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'


//add loading functionality

class CityCard extends React.Component {

    componentDidMount() {
        this.props.getNationalParks()
    }

    printNatParkInfo = () => {
        const selectedParks = this.props.parks.length > 0 ? this.props.parks.filter(park => park.states === this.props.city.attributes.state) : "nothing"
        if (selectedParks !== "nothing") {
            const desiredContent = selectedParks.map(park => ({description: park.description, name: park.fullName, url: park.url, weather: park.weatherInfo}))
            return desiredContent.map(park => <div><h1>{park.name}</h1> <p>{park.description}</p> <p>{park.weather}</p></div>)
        }

    }

    render() {
        
        return (
            <div>
                <h1>Inside City Card</h1>
                <h3>{this.props.city.attributes.name}</h3>
                <p>{this.printNatParkInfo()}</p>
                {/* <h3>{city.attributes.state} </h3>
                {city.attributes.parks.map(park => (<p>{park.name}</p>))}
                {city.attributes.climbing_gyms.map(cg => (<p>{cg.name}</p>))}
                {city.attributes.reis.map(rei => (<p>{rei.name}</p>))} */}
            </div>
            )
        }
    }


const mapStateToProps = (state) => {
    return {
        parks: state.parks
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            getNationalParks: () => {
                dispatch(getNationalParks())
            },
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCard)