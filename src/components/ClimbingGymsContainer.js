import React from 'react'
import { getClimbingGyms } from '../actions/climbingGyms'
import ClimbingGyms from './ClimbingGyms'
import { connect } from 'react-redux'

class ClimbingGymsContainer extends React.Component {

    componentDidMount() {
        this.props.getClimbingGyms(this.props.city.attributes.name)
    }

    getClimbingGymInfo = () => {
        const climbingGyms = this.props.climbingGyms.data.length > 0 ? this.props.climbingGyms : null   
        if (climbingGyms !== null) {
            return climbingGyms.data
        } else {
            return null
        }
    }
    
    render() {
        return (
            <ClimbingGyms climbingGyms={this.getClimbingGymInfo()} city={this.props.city}/>
        )
    }
}

    
const mapStateToProps = (state) => {
    return {
        climbingGyms: state.climbingGyms
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            getClimbingGyms: (city) => {
                dispatch(getClimbingGyms(city))
            }
        }
    )
}

    
export default connect(mapStateToProps, mapDispatchToProps)(ClimbingGymsContainer)