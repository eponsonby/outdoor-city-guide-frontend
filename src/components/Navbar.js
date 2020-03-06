import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Cities
                        </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/cities/1/parks">Boulder</a>
                    <a class="dropdown-item" href="/cities/2/parks">Seattle</a>
                    <a class="dropdown-item" href="/cities/3/parks">Reno</a>
                    <a class="dropdown-item" href="/cities/4/parks">Portland</a>
                    <a class="dropdown-item" href="/cities/5/parks">Asheville</a>
                    <a class="dropdown-item" href="/cities/6/parks">Salt Lake City</a>
                    </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }   
}

    
const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser,
      loggedIn: !!state.currentUser
    }
  }

export default connect(mapStateToProps)(Navbar)