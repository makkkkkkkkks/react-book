import React, {Component} from 'react';
// import ChatInput from "./ChatInput";
// import {Container, Row, Col} from 'reactstrap';
// import ChatsList from "./chats-list/ChatsList";
// import ShortMessage from "./message-model/ShortMessage";
import TestWS from "./TestWS";




class Chat extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div>
                <TestWS/>
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