import React from 'react';
import SockJS from 'sockjs-client';
import {Stomp} from '@stomp/stompjs';
import {ACCESS_TOKEN} from "../constants";
//import Websocket from "react-websocket/index";


const headersB = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    "Authorization": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIzIiwiaWF0IjoxNjA0MTcyNzg3LCJleHAiOjE2MDUwMzY3ODd9.z5pUEGYfEkzLoWhq1p_c9umQmZVsLcY3WJ3bCWwwjaZ13IbH2hxPVFO9FQ7YK65VlOi5y8hX51ScEC0Irt8JKQ"
};

class TestWS extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("Authorization", 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))
        /*    console.log(headersB)*/
    }

    closeConnection() {
    }

    openConnection() {
        let socket = new SockJS("http://localhost:8080/gs-guide-websocket");
        let stompClient = Stomp.over(socket);
        stompClient.connect(headersB, frame => {
            console.log('Connected: ' + frame)
            stompClient.subscribe('/topic/greetings', message => {
                console.log(message)
                //handlers.forEach(handler => handler(JSON.parse(message.body)))
                stompClient.send('/app/hello', headersB, 'dasdasdas');
            });

        });
        console.log(headersB)
    }

    sendMessage() {
    }

    /* var stompClient = null;

     function connect() {
         stompClient = Stomp.client('ws://localhost:8080/ws');
         stompClient.connect({}, function (frame) {
             stompClient.subscribe('/topic/greetings', function (response) {
                 showGreeting(JSON.parse(response.body).content);
             });
         });
     }

     function sendName() {
         stompClient.send("/app/hello", {}, JSON.stringify({'name': $("#name").val()}));
     }

     function showGreeting(message) {
         $("#greetings").append("<tr><td>" + message + "</td></tr>");
     }

     $(function () {
         connect();
         $("form").on('submit', function (e) {
             e.preventDefault();
         });
         $( "#send" ).click(function() { sendName(); });
     });
     */

    closeConnection() {
        let socket = new SockJS("http://localhost:8080/gs-guide-websocket");
        let stompClient = Stomp.over(socket);

    }

    render() {
        return (
            <div>
                <button onClick={this.openConnection}> Open connection</button>
                <button onClick={this.closeConnection}> Close connection</button>
                <button onClick={this.sendMessage}> Send text</button>
            </div>
        );
    }
}

export default TestWS;