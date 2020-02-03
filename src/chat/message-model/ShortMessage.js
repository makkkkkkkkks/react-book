import React from "react";

class ShortMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: {
                authorPic: '',
                author: '',
                text: '',
                date: '',
                status: '',
            }
        }
    }


    render() {
        return (
            <div>
                {this.props.message.authorPic}
                {this.props.message.author}
                {this.props.message.text}
                {this.props.message.date}
                {this.props.message.status}
            </div>
        )
    }

}

export default ShortMessage;