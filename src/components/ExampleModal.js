import React from "react"
import Modal from "react-bootstrap/Modal"


function Example() {
    const [show, setShow] = React.useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button type="button" className="btn btn-primary" onClick={handleShow}>Sign up</button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <button onClick={handleClose}>Close</button>
            <button onClick={handleClose}>Save Changes</button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  

  export default Example