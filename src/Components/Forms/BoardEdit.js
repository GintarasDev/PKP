import React from 'react';
import './Styles/BoardEdit.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";
import Board from "./Board";
import AllBoards from "./Boards";
import axios from "axios";

class BoardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null,
            title: "",
            description: "",
            assignedUsers: [],
            error: null
        }
    };

    render() {
        return (
            <div className={'boardEditContainer'}>
                <div>
                    <CUDTemplate dataUpdater={this.dataUpdater.bind(this)} assignedUsers={this.state.assignedUsers} value={'Board editing'} titlePlaceholder={"Board title"} descriptionPlaceholder={"Board description"} />
                </div>
                <div className={'boardEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.deleteBoardButton} width={'12rem'} text={'Delete board'}/>
                    <Button width={'13rem'} clickHandler={this.saveChanges} text={'Save changes'} />
                    <Button clickHandler={this.cancelChanges} color={'orange'} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    componentDidMount() {
        this.loadBoardData();
    }

    loadBoardData = () => {
        const url='http://localhost:8090/getBoardUsersEssentialData';
        axios.get(url, {params: {id: this.props.boardId}})
            .then(response=>this.prepareAssignedUsers(response))
            .catch(err=>console.log(err.response))
    };

    prepareAssignedUsers = (response) => {
        this.setState({title: this.props.title, description: this.props.description, assignedUsers: response.data});
    };

    deleteBoardButton = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'board'} call={'this board?'} deleteClickHandler={this.deleteBoard} cancelClickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    dataUpdater = (data) => {
        this.setState(data);
    };

    deleteBoard = () => {
        //add delete board logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <AllBoards clickHandler={this.props.returnHandler}/>)
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };

    cancelChanges = () => {
        //add cancel logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    };

    saveChanges = () => {
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    }
}

export default BoardEdit;