import React from 'react';
import './PreviewPanel.scss';

class PreviewPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        if (this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            this.props.clickHandler(this.props.itemNo, this.props.component);
        }
    };

    render() {
        return (
            <div className={"o-PreviewPanel " + this.props.class} style={{width: this.props.width, height: this.props.height}} onClick={this.handleClick}>

            </div>
        );
    }
}

export default PreviewPanel;
