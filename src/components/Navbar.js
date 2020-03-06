import React, { Component } from 'react'
import { connect } from 'react-redux'
import Logout from './Logout'

class Navbar extends Component {

    render() {
        return (
            // <div className="nav">
            //     <Link to="/cities">Home</Link>
            //     { this.props.loggedIn ? <Logout/> : null }
            // </div>


            <nav className="navbar navbar-expand-lg navbar-light navbar-right">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-item nav-link active" href="/">Home</a>
                            <a className="nav-item nav-link" href="#">Logout</a>
                        </div>
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