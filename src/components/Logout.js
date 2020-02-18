import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'

class Logout extends Component {

    render() {
        return (
            <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.logout()
                }
            }>
                <input type="submit" value="Log Out"/>
            </form>
        )
    }
}

    const mapDispatchToProps = (dispatch) => {
        return ({
            logout: (params) => dispatch(logout(params))
        })
    }


export default connect (null, mapDispatchToProps)(Logout)