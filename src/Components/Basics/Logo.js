import React from 'react';
import './Logo.scss';

class Logo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: this.remToFloat(this.props.width),
            height: this.remToFloat(this.props.height)
        };
    }

    remToFloat = (remVar) => {
        return parseFloat(remVar.substring(0, remVar.length - 3));
    };

    getSize = () => {
        if (this.state.width > this.state.height) {
            return this.state.height + "rem";
        } else {
            return this.state.width + "rem";
        }
    };

    render() {
        return (
            <div className={"o-LogoWrap " + this.props.class} style={{width: this.props.width, height: this.props.height}}>
                <img className="o-Logo" src={require("../Assets/logo.png")} style={{width: this.getSize(), height: this.getSize()}} alt={"Company Logo"}/>
            </div>
        );
    }
}


export default Logo;
