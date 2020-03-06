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
    // {`/cities/${this.props.city.id}/parks`}>

    render() {
        return (
            <div>
            <h1>Title</h1>
            <div className="row">
                <div className="col-6">
                    {this.linkedCityNames().slice(0,3)}
                </div>
                <div className="col-6">
                    {this.linkedCityNames().slice(3)}
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