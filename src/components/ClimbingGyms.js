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
            <h1>{this.props.city.attributes.name}</h1>
            <div class="row">
                <div class="col-3">
                    <ParksNavbar city={this.props.city}/>
                </div>
                <div class="col-9">
                    {this.getClimbingGymInfo()}
                </div>
            </div>
        </div> 

        )
    }
}

    
export default ClimbingGyms