import React, { Component } from 'react'
import { updateLoginForm } from '../actions/loginForm'
import { connect } from 'react-redux'

class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = event => {
        if (event.target.name === "username")
            this.setState({
                username: event.target.value,
            })
        else if (event.target.name === "password")
            this.setState({
                password: event.target.value
            })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.setCurrentUser(this.state.username, this.state.password)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input
                placeholder="username"
                value={this.state.username}
                name="username"
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                />

                <input
                placeholder="password"
                value={this.state.password}
                name="password"
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                />

                <input type="submit" value="Log In"/>
            </form>
        )
    }
}

    const mapDispatchToProps = (dispatch) => {
        return (
            {
                setCurrentUser: (user) => {
                    dispatch({
                        type: 'SET_CURRENT_USER',
                        user: user
                    })
                }
            }

        )
    }

export default connect (null, mapDispatchToProps)(Login)