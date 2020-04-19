import React from 'react';
import './Styles/GroupCreation.scss';
import CUDTemplate from "../Basics/CUDTemplate";
import Button from "../Basics/Button";
import PopUpError from "../Basics/PopUpError";
import axios from "axios";
import Validator from "../Helpers/Validation";
import Group from "./Group";

class GroupCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            title: "",
            description: "",
            assignedUsers: []
        };
    };

    render() {
        return (
            <div className={'groupCreationContainer'}>
                <div>
                    <CUDTemplate dataUpdater={this.dataUpdater.bind(this)} value={'Group creation'}
                                 titlePlaceholder={"Group title"} descriptionPlaceholder={"Group description"}/>
                </div>
                <div className={'groupCreationAdjust'}>
                    <Button clickHandler={this.createGroup.bind(this)} width={'10rem'} text={'Create'}/>
                    <Button clickHandler={this.cancelCreation.bind(this)} color={"red"} width={'10rem'}
                            text={'Cancel'}/>
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

    createGroup = () => {
        if (this.validateData()) {
            this.saveData(this.getUserData());
        }
    };

    creationSuccessful = (response) => {
        console.log("created");
        if (response.status === 200) {
            console.log("redirecting...");
            this.props.clickHandler(9, <Group groupId={response.data.id} clickHandler={this.props.clickHandler}/>);
        } else {
            this.setState({
                error: (<PopUpError message={"Unknown error occurred while creating a group, please try again latter"}
                                    clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
        }
    };

    saveData = (groupData) => {
        const url = 'http://localhost:8090/createGroup';
        axios({
            method: 'post',
            url: url,
            data: groupData
        })
            .then(response => this.creationSuccessful(response))
            .catch(err => console.log(err.response))
    };

    getUserData = () => {
        console.log("data updater: " + this.state.title + " - " + this.state.description + " - " + this.props.userId);
        return {
            title: this.state.title,
            description: this.state.description,
            administratorPersonId: this.props.userId,
            personListIds: this.state.assignedUsers
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

export default GroupCreation;