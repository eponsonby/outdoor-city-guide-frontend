import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import CityCard from './CityCard'

class Cities extends React.Component {
    // const cities = props => {
    cityCards = () => this.props.cities.length > 0 ? this.props.cities.map(city => <CityCard key={city.id} city={city}/>): null
    render()   { 
        return (
            <>
            <h1>Inside Cities</h1>
            {this.cityCards()}
            </>
        )
    }
    // }
}
// state referenced below is the state of the store
const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(Cities)