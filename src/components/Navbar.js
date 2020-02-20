import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Logout from './Logout'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <Link exact activeClassName="active" to="/cities">Home</Link>
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