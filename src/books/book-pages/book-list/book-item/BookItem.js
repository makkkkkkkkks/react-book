import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './bookItem.css';


export default (props) => (

    <Card className="bookItem">
        <Card.Img className=" card-img"
                  variant="top"
                  src="http://www.pxleyes.com/images/contests/book-reproduction/fullsize/Book-of-all-Book-4d586083c9985_hires.jpg"/>

        <Card.Body>
            <Card.Title>{props.book.bookName}</Card.Title>
            <Card.Text> {props.book.bookAuthor}</Card.Text>

        </Card.Body>
        <Card.Footer>
            {props.id}

            <Container>
                <Row>
                    <Col><Button variant="primary" onClick={props.onBookClick}>View</Button></Col>
                    <Col><Button variant="primary" onClick={props.onBookClick}>Add</Button></Col>
                </Row>

            </Container>


        </Card.Footer>
    </Card>


)