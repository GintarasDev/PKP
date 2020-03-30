import React from 'react';
import './InputField.scss';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        if(this.props.type === "area")
        {
            return (
                <textarea id={this.props.id} onChange={this.props.onChange} className={"o-InputField " + this.props.class} placeholder={this.props.placeholder} style={{width: this.props.width}} />
            );
        } else {
            return (
                <input id={this.props.id} onChange={this.props.onChange} className={"o-InputField " + this.props.class} type={this.props.type} placeholder={this.props.placeholder} style={{width: this.props.width}}/>
            );
        }
    }
}

export default InputField;
