import React from 'react';
import './TaskPreview.scss';
import ReactDOM from 'react-dom';


class TaskPreview extends React.Component {
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
            this.props.clickHandler(this.props.itemNo, this.props.component);
        }
    };

    additionalButton = () => {
        if (this.props.additionalElement !== undefined && this.props.additionalElement !== null) {
            this.setState({additionalElement: this.props.additionalElement});
        }
    };

    dragStart = (event) => {
        this.props.dropFunction(this.props.id, this.props.board);
    };

    dragging = (event) => {
        event.preventDefault();
    };

    render() {
        return (
                <div
                    onDragStart={(event) => this.dragStart(event)}
                    onDrag={(event) => this.dragging(event)}
                    draggable={"true"}
                    id={this.props.id}
                >
                    <div className="o-TaskPreview" style={{width: this.props.width}}>
                        <div>{this.props.title}</div>
                        <div>
                            <img src={require("../Assets/clock.svg")} alt={"Estimated time"}/>
                            <span>{" " + this.props.estimatedTime + "h"}</span>
                        </div>
                        <div>
                            <img src={require("../Assets/personal.svg")} alt={"Task creator"}/>
                            <span>{" " + this.props.taskCreator}</span>
                        </div>
                    </div>
                </div>
        );
    }

    componentDidMount() {
        this.prepareData();
        this.additionalButton();
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
                    <span
                        className={"o-PreviewPanelDataTitle"}>{typeof dataToAdd.title === typeof "" ? dataToAdd.title + " :" : ""}</span>
                    <span
                        className={"o-PreviewPanelDataValue"}>{typeof dataToAdd.value === typeof "" ? " " + dataToAdd.value : dataToAdd.value}</span>
                </div>
            )
        );
    };

}


export default TaskPreview;
