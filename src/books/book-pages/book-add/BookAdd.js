import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { postBooks} from "../../../util/APIUtils";
import "./addBookForm.css"


export default class BookAdd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                bookAutor: '',
                bookName: '',
                publishingHouse: '',
                bookLanguage: '',
                bookFormat: '',
                bookISBN: '',
            }
                    }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange = (e) => {
       // console.log(e);
        console.log(e.target);
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        this.setState({form: {...this.state.form, [fieldName]: fieldValue}})
    };
    handleSubmit = (e) => {
        //console.log(this.state.form);
      //  e.preventDefault();
        const postBooksRequest = Object.assign({}, this.state);


        postBooks(postBooksRequest).then(
            data => {
                console.log(data)
            }
        )

    }


    render() {
        return (

            <div className="book-add">
                <Form onSubmit={this.handleSubmit()}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> book name</Form.Label>
                        <Form.Control type="text" placeholder="Enter book name" name="bookName"
                                      defaultValue={this.state.form.bookName} onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>book author</Form.Label>
                        <Form.Control type="text" placeholder="Enter book author" name="bookAuthor"
                                      defaultValue={this.state.form.bookAutor}  onChange={this.handleChange}/>
                    </Form.Group>


                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>publishing house</Form.Label>
                        <Form.Control type="text" placeholder="Enter publishing house"
                                      name="publishingHouse"
                                      defaultValue={this.state.form.publishingHouse}  onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>book language</Form.Label>
                        <Form.Control type="text" placeholder="Enter book language"
                                      name="bookLanguage"
                                      defaultValue={this.state.form.bookLanguage}  onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>book formst</Form.Label>
                        <Form.Control type="text" placeholder="Enter book format"
                                      name="bookFormat"
                                      defaultValue={this.state.form.bookFormat}  onChange={this.handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>book isbn</Form.Label>
                        <Form.Control type="text" placeholder="Enter book ISBN"
                                      name="bookISBN"
                                      defaultValue={this.state.form.bookISBN}  onChange={this.handleChange}/>
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Add Book
                    </Button>
                </Form>
            </div>
        )
    }
}