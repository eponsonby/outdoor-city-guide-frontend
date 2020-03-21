import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signup } from '../actions/currentUser'
import Modal from "react-bootstrap/Modal"


class Signup extends Component {
    state = {
        name: "",
        username: "",
        password: "",
        show: false,
        setShow: false
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
        this.handleClose()
    }
  
    handleClose = () => this.setState({ show: false})
    handleShow = () => this.setState({ show: true})


    render() {
        return (
        <>
        <button type="button" className="btn btn-primary" onClick={this.handleShow}>Sign up</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header>
            <Modal.Title>Sign up</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                            type="password"
                            onChange={(event) => this.handleOnChange(event)}
                            />
                            <input type="submit" value="Sign Up"/>
                        </form>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose}>Close</button>
            <button onClick={this.handleOnSubmit}>Submit</button>
          </Modal.Footer>
        </Modal>
      </>
            

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