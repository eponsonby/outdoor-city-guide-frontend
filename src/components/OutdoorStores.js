import React from 'react'
import ParksNavbar from './ParksNavbar'
import Navbar from './Navbar'

class OutdoorStores extends React.Component {

    getOutdoorStoresInfo = function() {
        const outdoorStoresFromState = this.props.city.attributes.outdoor_stores
        const outdoorStoresText = outdoorStoresFromState.map(os => <div className="row"><p><a href={os.url}>{os.name}</a><br></br>{os.street}<br></br>{os.city.name}, {os.state}<br></br>{os.zip}</p></div>)
        return outdoorStoresText
    }
    
    render() {
        return (
            <div>
                <Navbar/>
            <h1>{this.props.city.attributes.name}</h1>
            <div className="row">
                <div className="col-3">
                    <ParksNavbar city={this.props.city}/>
                </div>
                <div className="col-4">
                    {this.getOutdoorStoresInfo().slice(0,4)}
                </div>
                <div className="col-5">
                    {this.getOutdoorStoresInfo().slice(4)}
                </div>
            </div>
        </div> 
        )
    }
}

    
export default OutdoorStores