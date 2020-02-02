import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import ModalDialog from 'react-bootstrap/ModalDialog';
// import ModalTitle from 'react-bootstrap/ModalTitle';
// import ModalBody from 'react-bootstrap/ModalBody';
// import ModalFooter from 'react-bootstrap/ModalFooter';
// import Form from 'react-bootstrap/Form';
import BookAdd from "../book-add/BookAdd";

function ModalBookEditing(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}> Edit book </Button>

            <Modal show={show} onHide={handleClose}>

                <Modal.Header closeButton>
                    <Modal.Title>Form Editing Book</Modal.Title>
                </Modal.Header>
                <Modal.Body> <BookAdd localButton={props.localButton} text={props.text}/> </Modal.Body>
                <div>{props.text} TEXT MUST BE HERE</div>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save Changes </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default ModalBookEditing;