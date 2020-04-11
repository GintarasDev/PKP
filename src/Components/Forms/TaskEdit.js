import React from 'react';
import './Styles/TaskEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";
import Board from "./Board";
import AllBoards from "./Boards";

class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null
        }
    };

    render() {
        return (
            <div className={'taskEditContainer'}>
                <div>
                    <BoardTemplate titlePlaceholder={"Task title"} descriptionPlaceholder={"Task description"} type={'task'} value={'Task editing'}/>
                </div>
                <div className={'taskEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete task'}/>
                    <Button width={'13rem'} clickHandler={this.saveChanges} text={'Save changes'} />
                    <Button color={'orange'} clickHandler={this.cancelChanges} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'task'} call={'this task?'} deleteClickHandler={this.deleteTask} cancelClickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };

    deleteTask = () => {
        //delete task logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    }

    cancelChanges = () => {
        //add cancel changes logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    };

    saveChanges = () => {
        //add save changes logic here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    };
}

export default TaskEdit;