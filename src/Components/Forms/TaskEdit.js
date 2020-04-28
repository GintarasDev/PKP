import React from 'react';
import './Styles/TaskEdit.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";
import Board from "./Board";
import axios from "axios";

class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null,
            title: "",
            description: "",
            estimatedTime: null,
            startDate: null,
            deadlineDate: null,
            adminUserId: this.props.userId,
            boardId: this.props.boardId,
            status: this.props.status,
            id: this.props.taskId,
            assignedUsers: [],
            assigneeId: 0,
            assigneeFullName: ""
        }
    };

    render() {
        return (
            <div className={'taskEditContainer'}>
                <div className={"oc-CudTemplateCont"}>
                    <CUDTemplate dataUpdater={this.dataUpdater.bind(this)} isTaskAssignee={true}
                                 titlePlaceholder={"Task title"} descriptionPlaceholder={"Task description"}
                                 type={'task'} value={'Task editing'} title={this.state.title}
                                 description={this.state.description}
                                 assigneeId={this.state.assigneeId} assigneeFullName={this.state.assigneeFullName}
                                 startDate={this.state.startDate} deadlineDate={this.state.deadlineDate}
                                 estimatedTime={this.state.estimatedTime}
                    />
                </div>
                <div className={'taskEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete task'}/>
                    <Button width={'13rem'} clickHandler={this.saveChanges} text={'Save changes'}/>
                    <Button color={'orange'} clickHandler={this.cancelChanges} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    componentDidMount() {
        this.loadTaskData();
    };

    loadTaskData = () => {
        const url = 'http://localhost:8090/taskData';
        axios.get(url, {crossdomain: true, params: {id: this.state.id}})
            .then(response => {
                    this.setState({
                        title: response.data.title,
                        description: response.data.description,
                        estimatedTime: response.data.estimatedTime,
                        startDate: response.data.startDate,
                        deadlineDate: response.data.deadlineDate,
                        assigneeId: response.data.assigneeId,
                        assigneeFullName: response.data.assigneeFullName
                    });
                }
            )
            .catch(err => console.log(err));
    };

    saveChanges = () => {
        this.saveData(this.getTaskData());
    };

    getTaskData = () => {
        return {
            id: this.state.id,
            title: this.state.title,
            description: this.state.description,
            estimatedTime: this.state.estimatedTime,
            startDate: this.state.startDate,
            deadlineDate: this.state.deadlineDate,
            assignee: this.state.assignedUsers[0]
        };
    };

    saveData = (taskData) => {
        const url = 'http://localhost:8090/updateTask';
        axios({
            method: 'post',
            url: url,
            data: taskData
        })
            .then(response => this.saveSuccessful(response))
            .catch(err => console.log(err.response.data))
    };

    saveSuccessful = (response) => {
        if (response.status === 200) {
            this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler}
                                                                                boardId={this.props.boardId}
                                                                                boardIsPersonal={this.props.boardIsPersonal}/>)
        }
    };

    dataUpdater = (data) => {
        this.setState(data);
    };

    popUp = () => {
        this.setState({
            popUp: (<DeleteProfile dynamic={'task'} call={'this task?'} deleteClickHandler={this.deleteTask}
                                   cancelClickHandler={this.removeMessage} width={"20rem"}/>)
        });
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };

    deleteTask = () => {
        //delete task logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board userId={this.props.userId}
                                                                            clickHandler={this.props.returnHandler}
                                                                            assignedUsers={"1 (personal)"}
                                                                            boardTitle={"Personal"}
                                                                            boardId={this.props.boardId}
                                                                            boardIsPersonal={this.props.boardIsPersonal}/>)
    };

    cancelChanges = () => {
        //add cancel changes logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board userId={this.props.userId}
                                                                            clickHandler={this.props.returnHandler}
                                                                            assignedUsers={"1 (personal)"}
                                                                            boardTitle={"Personal"}
                                                                            boardId={this.props.boardId}
                                                                            boardIsPersonal={this.props.boardIsPersonal}/>)
    };

}

export default TaskEdit;