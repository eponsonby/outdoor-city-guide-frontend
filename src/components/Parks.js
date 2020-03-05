import React from 'react'
import { getNationalParks } from '../actions/parks'
import { getLocalParks } from '../actions/localParks'
import { connect } from 'react-redux'
// import {Link} from 'react-router-dom'

class CityCard extends React.Component {

    componentDidMount() {
        this.props.getNationalParks()
        this.props.getLocalParks(this.props.city.attributes.name)
    }

    getNatParkInfo = () => {
        const selectedParks = this.props.parks.length > 0 ? this.props.parks.filter(park => park.states === this.props.city.attributes.state) : "nothing"
        if (selectedParks !== "nothing") {
            const desiredContent = selectedParks.map(park => ({description: park.description, name: park.fullName, url: park.url}))
            return desiredContent.map(park => <div><h3>{park.name}</h3> <p>{park.description}</p></div>)
        } else {
            return null
        }
    }
    
    getLocalParkInfo = () => {
        const selectedLocalParks = this.props.localParks.length > 0 ? this.props.localParks : null
        
        if (selectedLocalParks !== null) {
            const mappedParks = selectedLocalParks.map(park => <div><h3>{park.name}</h3><p>{park.description}</p></div>)
            return mappedParks
        } else {
            return null
        }
    }
    
    render() {
        return (
            <div>
                <h3>Nearby Parks and Recreation Areas</h3>
                    {this.getNatParkInfo()}
                    {this.getLocalParkInfo()}
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