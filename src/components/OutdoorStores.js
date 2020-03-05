import React from 'react'
import ParksNavbar from './ParksNavbar'

class OutdoorStores extends React.Component {

    getOutdoorStoresInfo = function() {
        const outdoorStoresFromState = this.props.city.attributes.outdoor_stores
        const outdoorStoresText = outdoorStoresFromState.map(os => <div><p>{os.name}</p><p>{os.street}</p><p>{os.city.name}, {os.state}</p><p>{os.zip}</p></div>)
        return outdoorStoresText
    }
    
    render() {
        return (
            <div>
                <ParksNavbar city={this.props.city}/>
                <h3>Outdoor Stores</h3>
                    {this.getOutdoorStoresInfo()}
            </div>
        )
    }
}

    
export default OutdoorStores