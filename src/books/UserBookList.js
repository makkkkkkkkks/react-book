import React from "react";
import {getBooks, getCurrentBooks, postBooks} from "../util/APIUtils";
import CardGroup from "react-bootstrap/CardGroup";
import BookItem from "./book-pages/book-list/book-item/BookItem";
import UserBookLists from "./book-pages/UserBookLists";
import "../books/book-pages/book-list/cardimg.css";


class UserBookList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentBookList: [],


        }
    }

    componentDidMount() {
        console.log(getCurrentBooks());
        getCurrentBooks().then((data) => {
            console.log(data)
            this.setState({currentBookList: data});
        });
    }

    render() {
        return (


                <div className="row">

                    <div className="col">{this.state.currentBookList.id}</div>
                    <div className="col">{this.state.currentBookList.bookName}</div>
                    <div className="col">{this.state.currentBookList.bookAuthor}</div>
                    <div className="col">{this.state.currentBookList.publishingHouse}</div>
                    <div className="col">{this.state.currentBookList.bookLanguage}</div>
                    <div className="col">{this.state.currentBookList.bookFormat}</div>
                    <div className="col">{this.state.currentBookList.bookISBN}</div>
                    <div className="col">{}</div>
                </div>




        )
    }
}

export default UserBookList;