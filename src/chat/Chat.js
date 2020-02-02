import React, {Component} from 'react';
import ChatInput from "./ChatInput";
import {Container, Row, Col} from 'reactstrap';
import ChatsList from "./chats-list/ChatsList";

class Chat extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col xs="4"><ChatsList/></Col>


                        <Col xs="8">

                            <Row>
                                <div>TEXT FROM CHAT</div>
                            </Row>
                            <ChatInput/></Col>
                    </Row>

                </Container>

            </div>
        )
    }
}

export default Chat