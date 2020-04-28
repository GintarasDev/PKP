import React from 'react';
import './Styles/TaskCreation.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import Board from "./Board";
import PopUpError from "../Basics/PopUpError";
import axios from "axios";
import Validator from "../Helpers/Validation";

class TaskCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            estimatedTime: null,
            startDate: null,
            deadlineDate: null,
            adminUserId: this.props.userId,
            boardId: this.props.boardId,
            status: this.props.status,
            assignee: null, //todo: limit to 1 assignee
            groupId: 1,
            assignedUsers: [],
            error: ""
        }
    };

    render() {
        return (
            <div className={'taskCreationContainer'}>
                <div className={"ob-CudTemplateCont"}>
                    <CUDTemplate dataUpdater={this.dataUpdater.bind(this)} type={'task'} value={'Task creation'}
                                 titlePlaceholder={"Task title"} descriptionPlaceholder={"Task description"}/>
                </div>
                <div className={'taskCreationButtons'}>
                    <Button class={"o-ActionButtons"} width={'10rem'} text={'Create'} clickHandler={this.createTask}/>
                    <Button color={"orange"} class={"o-ActionButtons"} width={'10rem'} text={'Cancel'}
                            clickHandler={this.cancelCreation}/>
                </div>
                {this.state.error}
            </div>
        );
    };

    dataUpdater = (data) => {
        this.setState(data);
    };

    createTask = () => {
        this.saveData(this.getTaskData());
    };

    cancelCreation = () => {
        //cancel task creation logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board userId={this.props.userId}
                                                                            clickHandler={this.props.returnHandler}
                                                                            assignedUsers={"1 (personal)"}
                                                                            boardTitle={"Personal"}
                                                                            boardId={this.props.boardId}
                                                                            boardIsPersonal={this.props.boardIsPersonal}/>)
    };

    creationSuccessful = (response) => {
        console.log("created");
        if (response.status === 200) {
            console.log("redirecting...");
            this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board userId={this.props.userId}
                                                                                clickHandler={this.props.returnHandler}
                                                                                assignedUsers={"1 (personal)"}
                                                                                boardTitle={"Personal"}
                                                                                boardId={this.props.boardId}
                                                                                boardIsPersonal={this.props.boardIsPersonal}/>)
        } else {
            this.setState({
                error: (<PopUpError message={"Unknown error occurred while creating a group, please try again latter"}
                                    clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
        }
    };

    saveData = (taskData) => {
        console.log(taskData.adminUserId);
        const url = 'http://localhost:8090/createTask';
        axios({
            method: 'post',
            url: url,
            data: taskData
        })
            .then(response => this.creationSuccessful(response))
            .catch(err => console.log(err.response))
    };

    getTaskData = () => {
        console.log("data updater: " + this.state.title + " - " + this.state.description + " - " + this.state.adminUserId);
        return {
            title: this.state.title,
            description: this.state.description,
            estimatedTime: this.state.estimatedTime,
            startDate: this.state.startDate,
            deadlineDate: this.state.deadlineDate,
            adminUserId: this.state.adminUserId,
            boardId: this.state.boardId,
            status: this.state.status,
            assignee: this.state.assignee,
            groupId: this.state.groupId
        };
    };

    validateData = () => {
        //todo: validate correct data
        let errors = Validator.checkIfAllFilled([
            {element: this.state.title, errorMessage: "Title field cannot be left empty"},
            {element: this.state.description, errorMessage: "Description field cannot be left empty"}
        ]);
        if (errors.errorsCount > 0) {
            this.setState({
                error: (
                    <PopUpError message={errors.errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
            return false;
        } else {
            return true;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: ""});
    }
}

export default TaskCreation;