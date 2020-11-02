import React, {Component} from 'react';
// import ShortMessage from "./message-model/ShortMessage";
import FindUsers from "./FIndeUsers";
import ChatProfile from "./ChatProfile";
import Button from 'react-bootstrap/Button'
import "./Chat.css";
import CustomTextArea from "./CustomTextArea";
import ActiveChatUsers from "./ActiveChatUsers";
import MessageListBox from "./MessageListBox";
import TestWS from "./TestWS";

class Chat extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="grid-container ">
                <div className="chat chat-border "></div>
                <div className="chat-profile"><ChatProfile currentUser={this.props.currentUser}/></div>
                <div className="chat-find-users"><FindUsers/></div>
                <div className="chat-users"><ActiveChatUsers/></div>
                <div className="chat-message"><MessageListBox/></div>
                <div className="text-area"><CustomTextArea/></div>
                <div className="chat-send-button"><Button variant="primary">Send</Button></div>
                <div><TestWS/></div>
            </div>
        )
    }
}

export default Chat