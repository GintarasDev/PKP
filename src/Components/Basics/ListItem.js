import React from 'react';
import './ListItem.scss';

class ListItem extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.iconPath !== undefined) {
            this.state = {
                icon: (<img style={{height: this.props.height}} className={"o-Icon"} src={require("../Assets/" + this.props.iconPath)} alt={this.props.text}/>)
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
            this.props.clickHandler(this.props.itemNo, this.props.component);
        }
    };

    render() {
        return (
            <div className={this.props.active ? "o-ListItem o-ListItemActive " + this.props.class : "o-ListItem " + this.props.class} style={{width: this.props.width, height: this.props.height}} onClick={this.handleClick}>
                {this.state.icon}
                <span className={this.props.isTitle ? "o-Title o-Text" : "o-Text"} >{this.props.text}</span>
            </div>
        );
    }
}

export default ListItem;
