import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Spinner from './Spinner'
// import { Link } from 'react-router-dom'
// import CityCard from './CityCard'

class Cities extends React.Component {

    linkedCityNames = () => {
        if (this.props.cities.loading === true) {
            return <Spinner/>
        } else {
            return this.props.cities.data.map(city => <p>{city.attributes.name}</p>)
        }
    }

    render() {
        return (
            <>
            <h1>Inside Cities</h1>
            {this.linkedCityNames()}
            </>
        )
    }

}



const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default withRouter(connect(mapStateToProps)(Cities))