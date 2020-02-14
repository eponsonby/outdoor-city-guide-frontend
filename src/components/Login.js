import React from 'react'
import { connect } from 'react-redux'

const Login = (props) => {
    return (
        <form onSubmit={undefined}>
            <input placeholder="username" value={props.username} name="username" type="text" onChange={undefined} />
            <input placeholder="password" value={props.password} name="password" type="text" onChange={undefined} />
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)