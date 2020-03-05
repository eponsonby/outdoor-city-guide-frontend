import React, { Component } from 'react'

class ParksNavbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Parks <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Activities</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Breweries</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Outdoor Stores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Climbing Gyms</a>
                    </li>
                </ul>
        </div>
    </nav>
        )
    }   
}

export default ParksNavbar