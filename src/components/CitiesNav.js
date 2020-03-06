
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class ParksNavbar extends Component {

    render() {
        return (
            <div className="parks-navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="nav flex-column">
                    <li className="nav-item active">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/parks`}>Parks <span className="sr-only">(current)</span></Link>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/activities`}>Activities</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/breweries`}>Breweries</Link>
                    </li> */}
                    <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/outdoor-stores`}>Outdoor Stores</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/climbing-gyms`}>Climbing Gyms</Link>
                    </li>
                </ul>
            </div>
            </nav>
            </div>
        )
    }   
}

export default ParksNavbar