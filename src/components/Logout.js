import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser'
import { withRouter } from 'react-router-dom'

class Logout extends Component {
// make this a link instead of a button
    render() {
        return (
            <form onSubmit={(event) => {
                    event.preventDefault()
                    this.props.logout()
                    this.props.history.push('/')
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


export default withRouter(connect(null, mapDispatchToProps)(Logout))