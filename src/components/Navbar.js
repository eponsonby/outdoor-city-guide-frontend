import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'
import Login from './Login'
import Signup from './Signup'

import { Link } from 'react-router-dom'

class Navbar extends Component {
    

    render() {
        return (
            <div className="main-navbar">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/cities" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Cities
                                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/cities/1/parks">Boulder</a>
                            <a className="dropdown-item" href="/cities/2/parks">Seattle</a>
                            <a className="dropdown-item" href="/cities/3/parks">Reno</a>
                            <a className="dropdown-item" href="/cities/4/parks">Portland</a>
                            <a className="dropdown-item" href="/cities/5/parks">Asheville</a>
                            <a className="dropdown-item" href="/cities/6/parks">Salt Lake City</a>
                            </div>
                            </li>
                            <li className="nav-item">
                                {this.props.loggedIn? <Logout/> : <Login/>}
                            </li>
                            <li className="nav-item">
                                {this.props.loggedIn? null: <Signup/>}
                            </li>
                        </ul>
                    </div>
                </nav>
             </div>
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