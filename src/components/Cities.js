import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
// import CityCard from './CityCard'

class Cities extends React.Component {

    linkedCityNames = () => {
        if (this.props.cities.loading === true) {
            return []
        } else {
            return this.props.cities.data.map(city => <p><Link to={`/cities/${city.id}/parks`}>{city.attributes.name}</Link></p>)
        }
    }


    render() {
        return (
            <div>
                <br></br><br></br>
            <h1>Welcome to the Outdoor City Guide</h1>
            <div className="row">
                <div className="col-4">
                {this.linkedCityNames().slice(0,2)}
                </div>
                <div className="col-4">
                    {this.linkedCityNames().slice(2,4)}
                </div>
                <div className="col-4">
                    {this.linkedCityNames().slice(4)}
                </div>
            </div>
        </div> 




        )
    }

}



const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default withRouter(connect(mapStateToProps)(Cities))