import React, { Component } from 'react'
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {
        return (
            <div className="nav">
                <p>Inside Navbar</p>
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