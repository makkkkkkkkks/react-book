import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import BookItem from "./BookItem";
import {getBooks} from '../../../../util/APIUtils';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import "../cardimg.css"

export default class BookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],

        }
    }

    componentDidMount() {
        console.log(getBooks);
        getBooks().then((data) => {
            // console.log(data);
            this.setState({booksList: data});
        });
    }

    onBookClick = (book) => {
        console.log(book);
    };

    render() {
        return (
            <div className="card_img">

                <CardGroup>

                    {this.state.booksList.map(book =>
                        <BookItem key={book.id} book={book}
                                  onBookClick={() => this.onBookClick(book)}
                        />)}

                </CardGroup>
            </div>
        )
    }
}