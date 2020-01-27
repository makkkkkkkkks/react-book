import React, {Component} from 'react';

import {Container, Row, Col} from 'reactstrap';
import './Profile.css';
import UserBookList from "../../books/UserBookList";

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (


            <Container>
                <Row>
                    <Col md={4}>
                        <div className="profile-container">
                            <div className="container">
                                <div className="profile-info">
                                    <div className="profile-avatar">
                                        {
                                            this.props.currentUser.imageUrl ? (
                                                <img src={this.props.currentUser.imageUrl}
                                                     alt={this.props.currentUser.name}/>
                                            ) : (
                                                <div className="text-avatar">
                                                    <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="profile-name">
                                        <h2>{this.props.currentUser.name}</h2>
                                        <p className="profile-email">{this.props.currentUser.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col md={{span: 4, offset: 4}}>
                        <div>test</div>
                    </Col>
                </Row>
                <Row>
                    <UserBookList props={this.props.navigation}/>
                </Row>

            </Container>
        );
    }
}

export default Profile