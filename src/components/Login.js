import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions/currentUser'
import Modal from "react-bootstrap/Modal"


class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    handleOnChange = event => {
        if (event.target.id === "username")
            this.setState({
                username: event.target.value,
            })
        else if (event.target.id === "password")
            this.setState({
                password: event.target.value
            })
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.login(this.state, this.props.history)
        this.setState({
            username: "",
            password: "",
            show: false,
            setShow: false
        })
        this.handleClose()
    }

    handleClose = () => this.setState({ show: false})
    handleShow = () => this.setState({ show: true})

    render() {
        return (
        // Login modal
            <>
            <a href="#" className="nav-link" onClick={this.handleShow}>Login</a>
            <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header>
                    <Modal.Title>Hello! Sign in to your account here.</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={(event) => this.handleOnSubmit(event)}>
                            <div className="form-group">
                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                        <input
                                            className="form-control"
                                            id="username"
                                            placeholder="Username"
                                            value={this.state.username}
                                            type="text"
                                            onChange={(event) => this.handleOnChange(event)}
                                            />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group input-group-lg">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={this.state.password}
                                        type="password"
                                        onChange={(event) => this.handleOnChange(event)}
                                    />
                                </div>
                            </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-secondary" onClick={this.handleOnSubmit}>Login</button>
                    <button className="btn btn-secondary" onClick={this.handleClose}>Close</button>
                </Modal.Footer>
            </Modal>
            </>
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
                },
                
                login: (credentials, history) => dispatch(login(credentials, history))
            }

        )
    }


export default connect(null, mapDispatchToProps)(Login)