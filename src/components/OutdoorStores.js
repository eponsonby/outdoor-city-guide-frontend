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
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Navbar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm mb-5">
                        <h1 className="city-name text-center">{this.props.city.attributes.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        <ParksNavbar city={this.props.city}/>
                    </div>
                    <div className="col-sm">
                        {this.getOutdoorStoresInfo().slice(0,4)}
                    </div>
                    <div className="col-sm">
                        {this.getOutdoorStoresInfo().slice(4)}
                    </div>
                </div>
            </div>
            </div> 
        )
    }
}

    
export default OutdoorStores