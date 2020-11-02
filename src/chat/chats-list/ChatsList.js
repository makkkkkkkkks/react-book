import React from "react"
import Form from 'react-bootstrap/Form';


class ChatsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>

                <Form>
                    <Form.Group controlId="searchUser">
                        <Form.Control type="text" placeholder="User search"/>
                    </Form.Group>
                </Form>

            </div>
        );
    }
}

export default ChatsList;