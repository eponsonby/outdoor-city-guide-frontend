import React from 'react'
import ParksNavbar from './ParksNavbar'

class ClimbingGyms extends React.Component {

    getClimbingGymInfo = function() {
        const climbingGymsFromState = this.props.city.attributes.climbing_gyms
        const climbingGymText = climbingGymsFromState.map(cg => <div><p>{cg.name}</p><p>{cg.street}</p><p>{cg.city.name}, {cg.state}</p><p>{cg.zip}</p></div>)
        return climbingGymText
    }
    
    render() {
        return (
            <div>
                <ParksNavbar city={this.props.city}/>
                <h3>Climbing Gyms</h3>
                    {this.getClimbingGymInfo()}
            </div>
        )
    }
}

    
export default ClimbingGyms