import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router-dom'
import CityCard from './CityCard'

const cities = props => {
  const cityCards = props.cities.length > 0 ? props.cities.map(city => <CityCard key={city.id} city={city}/>): null
    return (
        cityCards
    )
}

// state referenced below is the state of the store
const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(cities)