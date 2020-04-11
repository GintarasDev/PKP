import React from 'react';
import './Styles/BoardEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";
import Board from "./Board";
import AllBoards from "./Boards";

class BoardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null
        }
    };

    render() {
        return (
            <div className={'boardEditContainer'}>
                <div>
                    <BoardTemplate value={'Board editing'} titlePlaceholder={"Board title"} descriptionPlaceholder={"Board description"} />
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

    deleteBoardButton = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'board'} call={'this board?'} deleteClickHandler={this.deleteBoard} cancelClickHandler={this.removeMessage} width={"20rem"}/>)});
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
        //add saving here
        this.props.returnHandler(this.props.boardIsPersonal ? 1 : 9, <Board clickHandler={this.props.returnHandler} assignedUsers={"1 (personal)"} boardTitle={"Personal"} boardId={this.props.boardId} boardIsPersonal={this.props.boardIsPersonal} />)
    }
}

export default BoardEdit;