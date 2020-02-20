import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser'

class Signup extends Component {
    state = {
        name: "",
        username: "",
        password: ""
    }

    handleOnChange = event => {
        if (event.target.name === "name")
            this.setState({
                name: event.target.value,
            })
        else if (event.target.name === "username")
            this.setState({
                username: event.target.value
            })
        else if (event.target.name === "password")
            this.setState({
                password: event.target.value
            })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.signup(this.state, this.props.history)
        this.setState({
            username: "",
            password: ""
        })
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleOnSubmit(event)}>
                <input
                placeholder="name"
                value={this.state.name}
                name="name"
                type="text"
                onChange={(event) => this.handleOnChange(event)}
                />
                
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

                <input type="submit" value="Sign Up"/>
            </form>
        )
    }
}

    const mapDispatchToProps = (dispatch) => {
        return (
            {   
                signup: (credentials, history) => dispatch(signup(credentials, history))
            }
        )
    }


export default connect(null, mapDispatchToProps)(Signup)