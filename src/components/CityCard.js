import React from 'react'
// import {Link} from 'react-router-dom'

const CityCard = ({ city }) => {
  return (
    city ?
      <div>
        <h3>{city.attributes.name}</h3>
        {/* <h3>{city.attributes.state} </h3>
        {city.attributes.parks.map(park => (<p>{park.name}</p>))}
        {city.attributes.climbing_gyms.map(cg => (<p>{cg.name}</p>))}
        {city.attributes.reis.map(rei => (<p>{rei.name}</p>))} */}
      </div> :
      <p>This the the City card with no City!</p>
  )
}

export default CityCard