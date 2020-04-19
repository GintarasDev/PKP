import React from 'react';
import './Styles/BoardCreation.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import PopUpError from "../Basics/PopUpError";
import axios from "axios";
import Validator from "../Helpers/Validation";
import Board from "./Board";

class BoardCreation extends React.Component {
    constructor(props) {
        super(props);
        let users = [];
        users.push(this.props.userId);
        this.state = {
            title: "",
            description: "",
            adminUserId: this.props.userId,
            assignedUsers: users,
            error: null
        }
    };

    render() {
        return (
            <div className={'boardCreationContainer'}>
                <div className={"od-CudTemplateCont"} >
                    <CUDTemplate dataUpdater={this.dataUpdater.bind(this)} value={'Board creation'} titlePlaceholder={"Board title"} descriptionPlaceholder={"Board description"} />
                </div>
                <div className={'boardCreationButtons'}>
                    <Button class={"o-ActionButtons"} clickHandler={this.createBoard} width={'10rem'} text={'Create'}/>
                    <Button class={"o-ActionButtons"} color={"orange"} width={'10rem'} text={'Cancel'}/>
                </div>
                {this.state.error}
            </div>
        );
    };


    dataUpdater = (data) => {
        this.setState(data);
    };

    cancelCreation = () => {
        //todo: cancel creation
    };

    createBoard = () => {
        if(this.validateData()) {
            this.saveData(this.getBoardData());
        }
    };

    creationSuccessful = (response) => {
        console.log("created");
        if (response.status === 200) {
            console.log("redirecting..." + response.data);
            this.props.stateUpdater(9, <Board userId={this.state.activeUserId} boardId={response.data} boardIsPersonal={false} clickHandler={this.props.stateUpdater}/>);
        } else {
            this.setState({error: (<PopUpError message={"Unknown error occurred while creating a group, please try again latter"} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
        }
    };

    saveData = (boardData) => {
        const url='http://localhost:8090/createBoard';
        axios({
            method: 'post',
            url: url,
            data: boardData
        })
            .then(response=>this.creationSuccessful(response))
            .catch(err=>console.log(err.response))
    };

    getBoardData = () => {
        console.log("data updater: " + this.state.title + " - " + this.state.description + " - " + this.props.userId );
        return {
            title: this.state.title,
            description: this.state.description,
            adminUserId: this.state.adminUserId,
            assignedUsers: this.state.assignedUsers
        };
    };

    validateData = () => {
        //todo: validate correct data
        let errors = Validator.checkIfAllFilled([
            {element: this.state.title, errorMessage: "Title field cannot be left empty"},
            {element: this.state.description, errorMessage: "Description field cannot be left empty"}
        ]);
        if (errors.errorsCount > 0) {
            this.setState({error: (<PopUpError message={errors.errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
            return false;
        } else {
            return true;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: ""});
    }

}

export default BoardCreation;