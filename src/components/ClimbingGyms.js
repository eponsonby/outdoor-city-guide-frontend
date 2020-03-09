import React from 'react'
import ParksNavbar from './ParksNavbar'
import Navbar from './Navbar'

class ClimbingGyms extends React.Component {

    getClimbingGymInfo = function() {
        const climbingGymsFromState = this.props.city.attributes.climbing_gyms
        const climbingGymText = climbingGymsFromState.map(cg => <div><p><a href={cg.url}>{cg.name}</a><br></br>{cg.street}<br></br>{cg.city.name}, {cg.state}<br></br>{cg.zip}</p></div>)
        return climbingGymText
    }
    
    render() {

        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1 className="city-name">{this.props.city.attributes.name}</h1>
                    </div>
                    <div className="col-sm">
                        <Navbar/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-3">
                        <ParksNavbar city={this.props.city}/>
                    </div>
                    <div class="col-4">
                        {this.getClimbingGymInfo().slice(0,2)}
                    </div>
                    <div className="col-5">
                        {this.getClimbingGymInfo().slice(2)}
                    </div>
                </div>
            </div>
            </div>

        )
    }
}

    
export default ClimbingGyms