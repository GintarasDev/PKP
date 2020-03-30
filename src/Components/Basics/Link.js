import React from 'react';
import './Link.scss';

class Link extends React.Component {
    render() {
        return (
            <a className="o-Link" style={{width: this.props.width}} href={this.props.href}>{this.props.text}</a>
        );
    }
}

export default Link;
