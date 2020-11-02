import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class ChatInput extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Form.Group controlId="ControlTextarea">
                    <Form.Label>Enter your message </Form.Label>
                    <Form.Control as="textarea" rows="5"/>
                    <Button type="submit">Send</Button>
                </Form.Group>

            </div>
        )
    }
}

export default ChatInput;