import React from 'react'
import { getParks } from '../actions/parks'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'


class CityCard extends React.Component {

    componentDidMount() {
        this.props.getParks()
    }
    render() {
        console.log(this.props.parks)
        const parks = this.props.parks.length > 0 ? this.props.parks.find(park => park.states === "CO") : "nothing"
        console.log(parks)
        return (
            <div>
                <h1>Inside City Card</h1>
                <h3>{this.props.city.attributes.name}</h3>
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
            getParks: () => {
                dispatch(getParks())
            },
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(CityCard)