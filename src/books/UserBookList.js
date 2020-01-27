import React from "react";
import {getBooks, getCurrentBooks, postBooks} from "../util/APIUtils";
import CardGroup from "react-bootstrap/CardGroup";
import BookItem from "./book-pages/book-list/book-item/BookItem";
import UserBookLists from "./book-pages/UserBookLists";
// import "../books/book-pages/book-list/cardimg.css";
// import CardGroup from 'react-bootstrap/CardGroup';
// import { NavigationActions } from 'react-navigation';
import {Link} from "react-router-dom";
// import { withNavigation } from 'react-navigation';

// import { withRouter } from 'react-router-dom'


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
    //
    onBookClick = (book) => {
        console.log(this.props)
        this.props.location.navigate(
            'editBook',
        {
            book
        })
    };

    // onBookClick = (book) => {
    //     withRouter.push({
    //         routerName: 'editBook',
    //         state: { book }
    //     });
    //     console.log(this.props);
    // }
    booksItems() {
        return this.state.booksList.map(book => (
        <Link to={{
            pathname: "/editBook",
            state: { book }
        }} key={book.id}>
            <div className="col">{book.id}</div>
                <div className="col">{book.bookName}</div>
                <div className="col">{book.bookAuthor}</div>
                <div className="col">{book.publishingHouse}</div>
                <div className="col">{book.bookLanguage}</div>
                <div className="col">{book.bookFormat}</div>
                <div className="col">{book.bookISBN}</div>
                <div className="col">{}</div>
        </Link>
        ));
    };


    render() {
        return (
            <div className="row">

                <CardGroup>

                    {this.state.booksList.map(book =>
                        <BookItem key={book.id} book={book}
                                  onBookClick={() => this.onBookClick(book)}
                        />)}

                </CardGroup>
            </div>
                // <Link to={{ pathname: "book-edit"}} className="row">
                //
                //     <div className="col">{this.state.booksList.id}</div>
                //     <div className="col">{this.state.booksList.bookName}</div>
                //     <div className="col">{this.state.booksList.bookAuthor}</div>
                //     <div className="col">{this.state.booksList.publishingHouse}</div>
                //     <div className="col">{this.state.booksList.bookLanguage}</div>
                //     <div className="col">{this.state.booksList.bookFormat}</div>
                //     <div className="col">{this.state.booksList.bookISBN}</div>
                //     <div className="col">{}</div>
                // </Link>




        )
    }
}

export default UserBookList;