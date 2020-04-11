import React from 'react'
// import ParksNavbar from './ParksNavbar'
// import Navbar from './Navbar'
import { getOutdoorStores } from '../actions/outdoorStores'
import OutdoorStores from './OutdoorStores'
import { connect } from 'react-redux'

class OutdoorStoresContainer extends React.Component {

    componentDidMount() {
        this.props.getOutdoorStores(this.props.city.attributes.name)
    }

    // getOutdoorStoresInfo = function() {
    //     const outdoorStoresFromState = this.props.city.attributes.outdoor_stores
    //     const outdoorStoresText = outdoorStoresFromState.map(os => <div className="row"><p><a className="outdoor-store-name text-decoration-none" href={os.url} target="_blank" rel="noopener noreferrer">{os.name}</a><br></br>{os.street}<br></br>{os.city.name}, {os.state}<br></br>{os.zip}</p></div>)
    //     return outdoorStoresText
    // }

       
    getOutdoorStoreInfo = () => {
        const selectedOutdoorStores = this.props.outdoorStores.data.length > 0 ? this.props.outdoorStores : null   
        if (selectedOutdoorStores !== null) {
            
            return selectedOutdoorStores.data
        } else {
            return null
        }
    }
    
    render() {
        return (
            <OutdoorStores outdoorStores={this.getOutdoorStoreInfo()} city={this.props.city}/>
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

    
export default connect(mapStateToProps, mapDispatchToProps)(OutdoorStoresContainer)