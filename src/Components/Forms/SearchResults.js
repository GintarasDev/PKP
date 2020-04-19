import React from 'react';
import './Styles/SearchResults.scss';
import User from "../Basics/User";
import PreviewPanel from "../Basics/PreviewPanel";
import Board from "./Board";
import UserForm from "./User";

class SearchResults extends React.Component{
    constructor(props) {
        super(props);
        this.resultsUsers = [];
        this.resultsBoards = [];
        this.resultsGroups = [];
        this.state = {
        };
    };

    render() {
        this.prepareData();
        console.log("searching: " + this.props.searchString);
        return (
            <div className={"o-SearchResults"} style={{width: this.props.width}}>
                <div className={"o-ResultsTitle"} >Boards</div>
                <div className={"o-BoardsResults"} >
                    {this.resultsBoards}
                </div>
                <div className={"o-ResultsTitle"} >Groups</div>
                <div className={"o-GroupsResults"} >
                    {this.resultsGroups}
                </div>
                <div className={"o-ResultsTitle"} >Users</div>
                <div className={"o-UsersResults"} >
                    {this.resultsUsers}
                </div>
            </div>
        );
    };

    prepareData = () => {
        //connect to api
        this.resultsUsers = [];
        this.resultsBoards = [];
        this.resultsGroups = [];
        this.prepareBoards();
        this.prepareGroups();
        this.prepareUsers();

        this.prepareBoards(); // leave only one instance on build
        this.prepareBoards();
        this.prepareBoards();
        this.prepareBoards();
        this.prepareGroups();
        this.prepareGroups();
        this.prepareGroups();
        this.prepareGroups();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
        this.prepareUsers();
    };

    prepareBoards = () => {
        let placeholderData = [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}];
        this.resultsBoards.push(
            (<PreviewPanel clickHandler={this.openBoard.bind(this)} class={"previewPanel"} width={"20rem"} height={"15rem"} title={"Project X"} dataToDisplay={placeholderData}/>)
        );
    };

    openBoard = () => {
        //open board logic goes here :)
        this.props.clickHandler(9, <Board boardTitle={"Project X"} assignedUsers={"17"} clickHandler={this.props.clickHandler}/>);
    };

    prepareGroups = () => {
        let placeholderData = [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}];
        this.resultsGroups.push(
            (<PreviewPanel clickHandler={this.openGroup.bind(this)} class={"previewPanel"} width={"20rem"} height={"13rem"} title={"Student Workers"} dataToDisplay={placeholderData}/>)
        );
    };

    openGroup = () => {
        //open group logic goes here :)
        //this.props.clickHandler(9, <Group />);
        console.log("group clicked");
    };

    prepareUsers = () => {
        this.resultsUsers.push(
            (<User clickHandler={this.openUser.bind(this)} name={"Linas Kriskalonav"} height={"2.5rem"} isRemovable={false} />)
        );
    };

    openUser = () => {
        //open user profile logic goes here :)
        //this.props.clickHandler(9, <Profile />);
        console.log("user clicked");
        this.props.clickHandler(9, <UserForm clickHandler={this.props.clickHandler}/>);
    };
}

export default SearchResults;