import React, { Component } from 'react'
class ParksNavbar extends Component {

    render() {
        return (
            <div className="parks-navbar-container">
            <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#leftnavbarText" aria-controls="leftnavbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="leftnavbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href={`/cities/${this.props.city.id}/parks`}>Parks <span className="sr-only">(current)</span></a>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/activities`}>Activities</Link>
                    </li> */}
                    {/* <li className="nav-item">
                        <Link className="nav-link" to={`/cities/${this.props.city.id}/breweries`}>Breweries</Link>
                    </li> */}
                    <li className="nav-item">
                        <a className="nav-link" href={`/cities/${this.props.city.id}/outdoor-stores`}>Outdoor Stores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={`/cities/${this.props.city.id}/climbing-gyms`}>Climbing Gyms</a>
                    </li>
                </ul>
            </div>
            </nav>
            </div>
    }   
}

export default ParksNavbar