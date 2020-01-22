import React from "react";
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import './bookItem.css';



export default (props) => (

    <Card className="card">
        <Card.Img
                  variant="top"
                  src="http://www.pxleyes.com/images/contests/book-reproduction/fullsize/Book-of-all-Book-4d586083c9985_hires.jpg"/>

        <Card.Body>
            <Card.Title>{props.book.bookName}</Card.Title>
            <Card.Text> {props.book.bookAutor}</Card.Text>

        </Card.Body>
        <Card.Footer>
            {props.id}
            <Button variant="primary" onClick={props.onBookClick}>ADD</Button>
        </Card.Footer>
    </Card>

)