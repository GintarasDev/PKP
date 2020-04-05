import React from 'react';
import Logo from "../Basics/Logo";
import '../Basics/Button.scss';
import './Styles/ChangePassword.scss';
import Button from "../Basics/Button";
import InputField from "../Basics/InputField";
import PopUpError from "../Basics/PopUpError";

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
            <div>
                <div className={'cPassAdjust-text'}>
                    <label className={"cPassText"}>Change password</label>
                </div>
                <div className={'cPassCenter'}>
                    <div className={'cPassAdjust'}>
                        <Logo class={"logo"} width={"8rem"} height={"8rem"}/>
                    </div>
                    <div>
                        <InputField onChange={this.updateCurrentPassword} type={"password"} placeholder={"Current password"} width={"25rem"}/>
                        <InputField onChange={this.updateNewPassword} type={"password"} placeholder={"New password"} width={"25rem"}/>
                        <InputField onChange={this.updateRepeatPassword} type={"password"} placeholder={"Repeat new password"} width={"25rem"}/>
                    </div>
                    <div className={'cPassContainer'}>
                        <div className={'cPassContainerBT'}>
                            <Button clickHandler={this.changePassword.bind(this)} text={"Save"} width={"12rem"}/>
                            <Button color={'orange'} clickHandler="" text={"Cancel"} width={"12rem"}/>
                        </div>
                    </div>
                </div>
                {this.state.error}
            </div>
        );
    }

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
        //Connect change password form to backend here! (and remove console log) :)
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