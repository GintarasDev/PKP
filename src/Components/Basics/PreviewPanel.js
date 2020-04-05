import React from 'react';
import './PreviewPanel.scss';

class PreviewPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayData: null
        };
        this.data = [];
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
                <div className={"o-PreviewPanelData"}>
                    <div className={"o-PreviewPanelTitle"}>{this.props.title}</div>
                    {this.state.displayData}
                </div>
            </div>
        );
    };

    componentDidMount() {
        this.prepareData();
    }

    prepareData = () => {
        if (this.props.dataToDisplay !== undefined) {
            this.props.dataToDisplay.forEach(element => this.addDataToView(element));
        } else {
            this.data.push((
                <div>
                    <span className={"o-PreviewPanelDataTitle"}>Nothing to show</span>
                </div>
            ));
        }
        this.setState({displayData: this.data});
    };

    addDataToView = (dataToAdd) => {
            this.data.push(
                (
                    <div>
                        <span className={"o-PreviewPanelDataTitle"}>{dataToAdd.title + " :"}</span>
                        <span className={"o-PreviewPanelDataValue"}>{" " + dataToAdd.value}</span>
                    </div>
                )
            );
    };
}

export default PreviewPanel;
