import React from "react";
import {getBooks} from "../util/APIUtils"; //, getCurrentBooks, postBooks
import CardGroup from "react-bootstrap/CardGroup";
import BookItem from "./book-pages/book-list/book-item/BookItem";
//import UserBookLists from "./book-pages/UserBookLists";
// import "../books/book-pages/book-list/cardimg.css";
// import CardGroup from 'react-bootstrap/CardGroup';
// import { NavigationActions } from 'react-navigation';
//import {Link} from "react-router-dom";
// import { withNavigation } from 'react-navigation';

// import { withRouter } from 'react-router-dom'
import {withRouter} from "react-router";


class UserBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booksList: [],

        }
    }

    componentDidMount() {
        // console.log(getCurrentBooks());
        getBooks().then((data) => {
            // console.log(data)
            this.setState({booksList: data});
        });
    }


    onBookClick = (book) => {
        this.props.history.push({
            pathname: '/editBook',
            state: {book}
        })
    };

    // booksItems() {
    //     return this.state.booksList.map(book => (
    //         <Link to={{
    //             pathname: "/editBook",
    //             state: {book}
    //         }} key={book.id}>
    //             <div className="col">{book.id}</div>
    //             <div className="col">{book.bookName}</div>
    //             <div className="col">{book.bookAuthor}</div>
    //             <div className="col">{book.publishingHouse}</div>
    //             <div className="col">{book.bookLanguage}</div>
    //             <div className="col">{book.bookFormat}</div>
    //             <div className="col">{book.bookISBN}</div>
    //             <div className="col">{}</div>
    //         </Link>
    //     ));
    // };


    render() {
        return (

            <div className="row">
                <CardGroup>
                    {this.state.booksList.map(book =>
                        <BookItem key={book.id} book={book}
                                  onBookClick={() => this.onBookClick(book)}
                        />)}

                </CardGroup>
                <div>
                    booksItems()
                </div>
            </div>
        )
    }
}

export default withRouter(UserBookList);