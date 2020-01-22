import React, { Component } from 'react';
import BookList from "./book-list/BooksList";
import Card from "react-bootstrap/Card";
import BookAdd from "./book-add/BookAdd";



class BooksContainer extends Component{


    render(){
        return(<div>
            {/*<BookAdd/>*/}
<BookList/>
        </div>)
    }
}

export default BooksContainer

