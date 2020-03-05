import React from 'react'
import ParksNavbar from './ParksNavbar'

class OutdoorStores extends React.Component {

    getOutdoorStoresInfo = function() {
        const outdoorStoresFromState = this.props.city.attributes.outdoor_stores
        const outdoorStoresText = outdoorStoresFromState.map(os => <div className="row"><p>{os.name}<br></br>{os.street}<br></br>{os.city.name}, {os.state}<br></br>{os.zip}</p></div>)
        return outdoorStoresText
    }
    
    render() {
        return (
            <div>
            <h1>{this.props.city.attributes.name}</h1>
            <div className="row">
                <div className="col-3">
                    <ParksNavbar city={this.props.city}/>
                </div>
                <div className="col-4">
                    {this.getOutdoorStoresInfo().slice(0,5)}
                </div>
                <div className="col-5">
                    {this.getOutdoorStoresInfo().slice(5)}
                </div>
            </div>
        </div> 
        )
    }
}

    
export default OutdoorStores