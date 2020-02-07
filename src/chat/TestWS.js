import React from 'react';
import SockJS from 'sockjs-client';
import {ACCESS_TOKEN} from "../constants";
import {Stomp} from '@stomp/stompjs';

class TestWS extends React.Component {
    constructor(props) {
        super(props);
    }

// async
    componentDidMount() {
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                "Authorization": "Bearer " + localStorage.getItem(ACCESS_TOKEN)
            }
        };
        // const response = await fetch('http://localhost:8080/gs-guide-websocket', headers);
        // console.log(response)
        // const socketa = new WebSocket('ws://localhost:8080/gs-guide-websocket');
        // socketa.addEventListener('message', async (event: any) => {
        //     const message = JSON.parse(event.data);
        //     const request = await fetch(`http://localhost:8080/profiles/${message.id}`, headers);
        //     const profile = await request.json();
        //     this.state.profiles.push(profile);
        //     this.setState({profiles: this.state.profiles});
        // });

        let socket = new WebSocket("ws://localhost:8080/gs-guide-websocket" , ["access_token", + localStorage.getItem(ACCESS_TOKEN)]);
        let ws = Stomp.over(socket);
        console.log(socket);

        let stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            console.log(stompClient.connect())
         });


    }

    render() {
        return (
            <div>
                connect
            </div>
        );
    }
}

export default TestWS;
