import React from 'react';
import './PopUpError.scss';

class PopUpError extends React.Component {
    handleClick = () => {
        if(this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            this.props.clickHandler();
        }
    };

    render() {
        console.log("rendering error: " + this.props.message);
        return (
            <div className="o-Error" onClick={this.handleClick.bind(this)} style={{width: this.props.width}}>
                {this.props.message}
            </div>
        );
    };
}

export default PopUpError;
