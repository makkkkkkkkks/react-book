import React from 'react';
import {Stomp} from '@stomp/stompjs';
import SockJS from 'sockjs-client';

import SockJsClient from 'react-stomp';
import {connect} from "../util/APIUtils";

class WebSockets extends React.Component {


    constructor(props) {
        super(props);
    }

    componentDidMount() {

        connect()
    }



    // sendMessage = (msg) => {
    //     this.clientRef.sendMessage('/topics/all', msg);
    // }

    render() {
        return (
            <div>
                connect

                {/*<SockJsClient url='http://localhost:3000/gs-guide-websocket' topics={['/topics/all']}*/}
                {/*              onMessage={(msg) => {*/}
                {/*                  console.log(msg);*/}
                {/*              }}*/}
                {/*              ref={(client) => {*/}
                {/*                  this.clientRef = client*/}
                {/*              }}/>*/}
            </div>
        );
    }
}

export default WebSockets;