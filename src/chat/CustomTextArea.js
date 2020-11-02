import React, {Component} from 'react';
import "./CustomTextArea.css";

class CustomTextArea extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="form-group green-border-focus ml-lg-1">
                <textarea className="custom-text-area" id="exampleFormControlTextarea5" rows="3"></textarea>
            </div>
        )
    }

}

export default CustomTextArea;