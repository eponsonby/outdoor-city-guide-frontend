import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const cities = props => {
  const cityCards = props.cities.length > 0 ?
    props.cities.map(city => (<p key={city.id}><Link to={`/cities/${city.id}`}>{city.attributes.name}</Link></p>)) :
    null

  return cityCards
}

const mapStateToProps = state => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(cities)