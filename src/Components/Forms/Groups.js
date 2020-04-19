import React from 'react';
import './Styles/Groups.scss';
import PreviewPanel from "../Basics/PreviewPanel";
import Group from "./Group";
import axios from "axios";
import User from "../Basics/User";

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
                <div className="o-AllGroupsMargin">
                    {this.state.dataToDisplay}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards = () => {
        const url = 'http://localhost:8090/getAllGroups';
        axios.get(url, {crossdomain: true})
            .then(response => {
                    response.data.forEach(element => {
                            this.prepareData([{title: "Number of members", value: element.numberOfMembers},
                                    {title: "Assigned tasks", value: element.membersTasksNumber},
                                    {title: "Administrator", value: element.administratorFullName},
                                    {title: "Description", value: element.description}],
                                element.title,
                                element.id)
                        }
                    );
                    this.setState({dataToDisplay: this.data});
                }
            )
            .catch(err => console.log(err));
    };

    prepareData = (data, title, id) => {
        this.data.push(
            (<PreviewPanel clickHandler={this.openGroup.bind(this)} class={"previewPanel"} width={"20rem"}
                           height={"20rem"} boardId={id} title={title} dataToDisplay={data}/>)
        );
    };

    openGroup = (id) => {
        //open group logic goes here :)
        this.props.clickHandler(9, <Group clickHandler={this.props.clickHandler} id={id}/>);
        console.log("group clicked");
    }
}


export default AllGroups;
