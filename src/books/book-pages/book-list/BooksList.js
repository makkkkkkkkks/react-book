import React from "react";
import CardDeck from 'react-bootstrap/CardDeck';
import BookItem from "./book-item/BookItem";
import {getBooks} from '../../../util/APIUtils';

import "./cardimg.css"

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

                <CardDeck>
                    {this.state.booksList.map(book =>
                        <BookItem key={book.id} book={book}
                                  onBookClick={() => this.onBookClick(book)}
                        />)}

                </CardDeck>
            </div>
        )
    }
}