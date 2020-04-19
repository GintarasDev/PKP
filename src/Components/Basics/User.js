import React from 'react';
import './User.scss';

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }

    handleClick = () => {
        if(this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            this.props.clickHandler(this.state.id, this.props.name);
        }
    };

    handleRemoveClick = () => {
        if(this.props.onRemove === undefined || this.props.onRemove === null) {
            console.log("remove function is not assigned...");
        } else {
            this.props.onRemove();
        }
    };

    render() {
        return (
            <div className={"o-UserPreview " + this.props.class} style={{height: this.props.height}} >
                <img onClick={this.handleClick} className={"o-Avatar"} src={require("../Assets/logo.png")} alt={this.props.name}/>
                <div onClick={this.handleClick} className={"o-UserName"} >
                    {this.props.name}
                </div>
                {this.props.isRemovable ? <img onClick={this.handleRemoveClick} className={"o-RemoveIcon"} src={require("../Assets/remove.svg")} alt={this.props.name}/> : ""}
            </div>
        );
    }
}

export default User;