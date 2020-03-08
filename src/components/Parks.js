import React from 'react'
import ParksNavbar from './ParksNavbar'
import Navbar from './Navbar'
// import {Link} from 'react-router-dom'

class Parks extends React.Component {
    
    mapNationalParks = () => {
        if (this.props.nationalParks !== null) {
            let parks = this.props.nationalParks.map(park => ({description: park.description, name: park.fullName, url: park.url}))
            return parks.map(park => <div key={park.name}><h3>{park.name}</h3><p>{park.description}</p></div>)
        } else {
            return null
        }
    }
    
    mapLocalParks = () => {        
        if (this.props.localParks !== null) {
            let localParks = this.props.localParks.map(park => <div key={park.name}><h3>{park.name}</h3><p>{park.description}</p></div>)
            return localParks
        } else {
            return "Loading"
        }
    }
    
    render() {
        return (

        <div>
            <Navbar/>
            <br></br><br></br><br></br>
            <h1>{this.props.city.attributes.name}</h1>  
            <div className="row">
                <div className="col-3">
                    <ParksNavbar city={this.props.city}/>
                </div>
                <div className="col-9">
                
                    <h1>Nearby Parks and Recreation Areas</h1>
                    <br></br>
                    {this.mapNationalParks()}
                    {this.mapLocalParks()}
                </div>
            </div>
        </div> 

        )
    }
}

    
export default Parks