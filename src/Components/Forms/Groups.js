import React from 'react';
import './Styles/Groups.scss';
import PreviewPanel from "../Basics/PreviewPanel";
import Group from "./Group";

class AllGroups extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToDisplay: null,
            id: this.props.id
        };
        this.data = [];
    }

    render() {
        return (
            <div className="o-AllGroups">
                <div className="o-AllGroupsMargin" >
                    {this.state.dataToDisplay}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards = () => {
        //connect to api here :)
        this.groupsData = [
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}],
            [{title: "Number of members", value: "17"}, {title: "Assigned tasks", value: "37.5h"}, {title: "Administrator", value: "Lina Karbokaite"}, {title: "Description", value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"}]
            ];
        this.groupsData.forEach(element => this.prepareData(element));
        this.setState({dataToDisplay: this.data});
    };

    prepareData = (data) => {
        this.data.push(
            (<PreviewPanel clickHandler={this.openGroup.bind(this)} class={"previewPanel"} width={"20rem"} height={"20rem"} title={"Student workers"} dataToDisplay={data}/>)
        );
    };

    openGroup = () => {
        //open group logic goes here :)
        this.props.clickHandler(9, <Group clickHandler={this.props.clickHandler} />);
        console.log("group clicked");
    }
}


export default AllGroups;
