import React from 'react'
import { getNationalParks } from '../actions/parks'
import { getLocalParks } from '../actions/localParks'
import { connect } from 'react-redux'
import Parks from './Parks'
// import {Link} from 'react-router-dom'

class ParksContainer extends React.Component {

    componentDidMount() {
        this.props.getNationalParks(this.props.city.attributes.name)
        this.props.getLocalParks(this.props.city.attributes.name)
    }

    getNatParkInfo = () => {
        const selectedParks = this.props.parks.length > 0 ? this.props.parks : null
        if (selectedParks !== null) {
            return selectedParks
        } else {
            return null
        }
    }
    
    getLocalParkInfo = () => {
        const selectedLocalParks = this.props.localParks.length > 0 ? this.props.localParks : null   
        if (selectedLocalParks !== null) {
            return selectedLocalParks
        } else {
            return null
        }
    }
    
    render() {
        return (
            <Parks nationalParks = {this.getNatParkInfo()} localParks= {this.getLocalParkInfo()} city={this.props.city}/>
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
                getNationalParks: (city) => {
                    dispatch(getNationalParks(city))
                },
                getLocalParks: (city) => {
                    dispatch(getLocalParks(city))
                }
            }
        )
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)