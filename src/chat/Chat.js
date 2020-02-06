import React, {Component} from 'react';
import ChatInput from "./ChatInput";
import {Container, Row, Col} from 'reactstrap';
import ChatsList from "./chats-list/ChatsList";
import ShortMessage from "./message-model/ShortMessage";
import {testWebsocket} from "../util/APIUtils";
import WebSockets from "../util/WebSockets";


class Chat extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <WebSockets/>
                {/*<Container>*/}
                {/*    <Row>*/}
                {/*        <Col xs="4"><ChatsList/></Col>*/}
                {/*        /!* <ShortMessage*!/*/}

                {/*             pictures={message.authorPic}/}

                {/*        /!* />*!/*/}
                {/*      */}
                {/*        < Col xs="8">*/}

                {/*            <Row>*/}
                {/*                <div>TEXT FROM CHAT</div>*/}
                {/*            </Row>*/}
                {/*            <ChatInput/></Col>*/}
                {/*    </Row>*/}

                {/*</Container>*/}

            </div>
        )
    }
}

export default Chat