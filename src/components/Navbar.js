import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <NavLink exact activeClassName to="/cities">Cities</NavLink>
                <NavLink exact activeClassName to="/">Home</NavLink>
                { this.props.loggedIn ? <Logout/> : null }
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