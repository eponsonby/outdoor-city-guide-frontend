import React from 'react'
import ParksNavbar from './ParksNavbar'
import Navbar from './Navbar'
import { getOutdoorStores } from '../actions/outdoorStores'
import { connect } from 'react-redux'

class OutdoorStores extends React.Component {

    componentDidMount() {
        this.props.getOutdoorStores(this.props.city.attributes.name)
    }

    getOutdoorStoresInfo = function() {
        const outdoorStoresFromState = this.props.city.attributes.outdoor_stores
        const outdoorStoresText = outdoorStoresFromState.map(os => <div className="row"><p><a className="outdoor-store-name text-decoration-none" href={os.url} target="_blank" rel="noopener noreferrer">{os.name}</a><br></br>{os.street}<br></br>{os.city.name}, {os.state}<br></br>{os.zip}</p></div>)
        return outdoorStoresText
    }
    
    render() {
        return (
            <div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                    <a className="city-name" href={`/cities/${this.props.city.id}`}>{this.props.city.attributes.name}</a>
                    </div>
                    <div className="col-sm">
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm">
                        
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

const mapStateToProps = (state) => {
    return {
        outdoorStores: state.outdoorStores
    }
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            getOutdoorStores: (city) => {
                dispatch(getOutdoorStores(city))
            }
        }
    )
}

    
export default connect(mapStateToProps, mapDispatchToProps)(OutdoorStores)