import React from 'react';
import './Button.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.iconPath !== undefined) {
            this.state = {
                icon: (<img style={{height: this.props.height}} className={"o-ButtonIcon"} src={require("../Assets/" + this.props.iconPath)} alt={this.props.text}/>)
            }
        } else {
            this.state = {
                icon: null
            }
        }
    }

    handleClick = () => {
        if(this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            this.props.clickHandler();
        }
    };

    render() {
        return (
            <button className={"o-Button " + (this.props.color === "orange" ? "o-Button-Orange" : (this.props.color === "red" ? "o-Button-Red" : "o-Button-Green")) + " " + this.props.class} type="button" onClick={this.handleClick.bind(this)} style={{width: this.props.width}}>
                {this.state.icon}
                {this.props.text}
            </button>
        );
    }
}

export default Button;