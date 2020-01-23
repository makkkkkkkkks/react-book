import React, {Component} from 'react';
import BookList from "./book-item/BookList";


class BookListView extends Component {
    render() {
        return (
            <div>
                <BookList/>
            </div>
        )
    }
}

export default BookListView