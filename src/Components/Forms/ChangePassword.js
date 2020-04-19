import React from 'react';
import Logo from "../Basics/Logo";
import '../Basics/Button.scss';
import './Styles/ChangePassword.scss';
import Button from "../Basics/Button";
import InputField from "../Basics/InputField";
import PopUpError from "../Basics/PopUpError";
import ProfileForm from "./Profile";
import axios from "axios";

class ChangePasswordForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: "",
            newPassword: "",
            repeatPassword: "",
            error: null
        };
    }
    render() {
        return (
            <div className={'o-PasswordChangeWrap'}>
                    <div className={"cPassText"}>Change password</div>
                <div className={'cPassCenter'}>
                    <div className={'cPassAdjust'}>
                        <Logo class={"logo"} width={"8rem"} height={"8rem"}/>
                    </div>
                    <div className={'c-InputField'} >
                        <InputField class={"c-InputIn"} onChange={this.updateCurrentPassword} type={"password"} placeholder={"Current password"} width={"100%"}/>
                        <InputField class={"c-InputIn"} onChange={this.updateNewPassword} type={"password"} placeholder={"New password"} width={"100%"}/>
                        <InputField class={"c-InputIn"} onChange={this.updateRepeatPassword} type={"password"} placeholder={"Repeat new password"} width={"100%"}/>
                    </div>
                    <div className={'cPassContainer'}>
                        <div className={'cPassContainerBT'}>
                            <Button clickHandler={this.changePassword.bind(this)} text={"Save"} width={"12rem"}/>
                            <Button color={'orange'} clickHandler={this.cancelChange} text={"Cancel"} width={"12rem"}/>
                        </div>
                    </div>
                </div>
                {this.state.error}
            </div>
        );
    }

    cancelChange = () => {
      console.log("cancel change");
      //todo: cancel change
    };

    componentDidMount() {
        this.fetchPassword();
    }

    fetchPassword(){
        this.setState({
            currentPassword: ""
        });
    };

    changePassword = () => {
        this.validateData();
        this.saveChanges();
    };

    saveChanges = () => {
        const url='http://localhost:8090/updatePassword';
        axios({
            method: 'post',
            url: url,
            data: this.getUserData()
        })
            .then(this.props.clickHandler(9, <ProfileForm userId={this.props.userId} clickHandler={this.props.clickHandler} stateUpdater={this.props.stateUpdater}/>))
            .catch(err=>console.log(err))
    };

    getUserData = () => {
        return {
            id: this.props.userId,
            oldPassword: this.state.currentPassword,
            newPassword: this.state.newPassword,
        };
    };

    validateData = () => {
        this.errorsCount = 0;
        this.checkIfEmpty(this.state.currentPassword, "you must type your current password");
        this.checkIfEmpty(this.state.newPassword, "New password field cannot be left empty");
        this.checkIfEmpty(this.state.repeatPassword, "Repeat password field cannot be left empty");
        if (this.state.repeatPassword !== this.state.newPassword){
            this.setState({error: (<PopUpError message={"Passwords do not match"} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
            this.errorsCount++;
        }
        if (this.errorsCount > 1) {
            this.setState({error: (<PopUpError message={"Please make sure that all mandatory fields are filled correctly (*) and that passwords match"} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
        }
        return this.errorsCount === 0;
    };

    checkIfEmpty = (data, errorMessage) => {
        if (data === null || data === undefined || data === "" || data === " "){
            this.setState({error: (<PopUpError message={errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
            this.errorsCount++;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: null});
    };

    setActive = () => {
        this.props.clickHandler(9, <ProfileForm clickHandler={this.props.clickHandler}/>);
    };

    updateCurrentPassword = (e) => {
        this.setState({currentPassword: e.target.value});
    };

    updateNewPassword = (e) => {
        this.setState({newPassword: e.target.value});
    };

    updateRepeatPassword = (e) => {
        this.setState({repeatPassword: e.target.value});
    };
}

export default ChangePasswordForm;