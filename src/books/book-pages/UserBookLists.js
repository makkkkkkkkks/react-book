import React from "react";

export default (props) => (
    <div className="row">
        <div className="col">{props.book.id}</div>
        <div className="col">{props.book.bookName}</div>
        <div className="col">{props.book.bookAuthor}</div>
        <div className="col">{props.book.publishingHouse}</div>
        <div className="col">{props.book.bookLanguage}</div>
        <div className="col">{props.book.bookFormat}</div>
        <div className="col">{props.book.bookISBN}</div>
    </div>
)