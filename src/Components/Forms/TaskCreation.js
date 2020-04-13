import React from 'react';
import './Styles/TaskCreation.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import Board from "./Board";

class TaskCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={'taskCreationContainer'}>
                <div>
                    <CUDTemplate type={'task'} value={'Task creation'} titlePlaceholder={"Task title"} descriptionPlaceholder={"Task description"} />
                </div>
                <div className={'taskCreationAdjust'}>
                    <Button class={"o-ActionButtons"} width={'10rem'} text={'Create'} clickHandler={this.createTask} />
                    <Button color={"orange"} class={"o-ActionButtons"} width={'10rem'} text={'Cancel'} clickHandler={this.cancelCreation} />
                </div>
            </div>
        );
    };

    createTask = () => {
        //create task logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board boardId={/*todo: this.user.personalBoardId*/this.state.personalBoardId} boardIsPersonal={true} assignedUsers={"1 (personal)"} boardTitle={"Personal"} clickHandler={this.props.returnHandler}/>)
    };

    cancelCreation = () => {
        //cancel task creation logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board boardId={/*todo: this.user.personalBoardId*/this.state.personalBoardId} boardIsPersonal={true} assignedUsers={"1 (personal)"} boardTitle={"Personal"} clickHandler={this.props.returnHandler}/>)
    };
}

export default TaskCreation;