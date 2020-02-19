import React, { Component } from 'react'
import { connect } from 'react-redux'
// import Login from './Login'
// import Logout from './Logout'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <button> Log In </button>
                <button> Sign Up </button>
                {/* {this.props.currentUser ? <Logout/> : <Login/>} */}
            </div>
        )
    }
}

    
const mapStateToProps = (state) => {
    return {
      currentUser: state.currentUser
    }
  }

export default connect (mapStateToProps)(Navbar)