import React from 'react';
import './Button.scss';

class Button extends React.Component {
    handleClick = () => {
        if(this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            this.props.clickHandler();
        }
    };

    render() {
        return (
            <button className="o-Button" type="button" onClick={this.handleClick.bind(this)} style={{width: this.props.width}}>{this.props.text}</button>
        );
    }
}

export default Button;
