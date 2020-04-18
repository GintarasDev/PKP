import React from 'react';
import './PreviewPanel.scss';

class PreviewPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayData: null,
            additionalElement: null
        };
        this.data = [];
    }

    handleClick = () => {
        if (this.props.clickHandler === undefined || this.props.clickHandler === null) {
            console.log("function is not assigned...");
        } else {
            if (this.props.boardId !== null){
                this.props.clickHandler(this.props.boardId);
            } else {
                this.props.clickHandler(this.props.itemNo, this.props.component);
            }
        }
    };

    additionalButton = () => {
        if (this.props.additionalElement !== undefined && this.props.additionalElement !== null) {
            this.setState({additionalElement: this.props.additionalElement});
        }
    };

    render() {
        this.prepareData();
        return (
            <div onDragOver={this.allowDrop} onDrop={(event) => this.drop(event)} className={"o-PreviewPanel " + this.props.class} style={{width: this.props.width, height: this.props.height}} onClick={this.handleClick}>
                <div className={"o-PreviewPanelData"} style={this.state.additionalElement === null ? {} : {paddingBottom: this.props.additionalElementHeight}}>
                    <div className={"o-PreviewPanelTitle"}>{this.props.title}</div>
                    {this.data}
                    <div className={"o-AdditionalElement"} style={this.state.additionalElement === null ? {} : {bottom: "-" + this.props.additionalElementHeight}}>
                        {this.state.additionalElement}
                    </div>
                </div>
            </div>
        );
    };

    componentDidMount() {
        this.additionalButton();
    }

    prepareData = () => {
        this.data = [];
        if (this.props.dataToDisplay !== undefined) {
            this.props.dataToDisplay.forEach(element => this.addDataToView(element));
        } else {
            this.data.push((
                <div>
                    <span className={"o-PreviewPanelDataTitle"}>Nothing to show</span>
                </div>
            ));
        }
    };

    addDataToView = (dataToAdd) => {
            this.data.push(
                (
                    <div>
                        <span className={"o-PreviewPanelDataTitle"}>{typeof dataToAdd.title === typeof "" ? dataToAdd.title + " :" : ""}</span>
                        <span className={"o-PreviewPanelDataValue"}>{typeof dataToAdd.value === typeof "" ? " " + dataToAdd.value : dataToAdd.value}</span>
                    </div>
                )
            );
    };

    allowDrop = (event) => {
        event.preventDefault();
    };

    drop = (event) => {
        event.preventDefault();
        this.props.addElement(this.props.title);
    };
}

export default PreviewPanel;
