import React from 'react';
import Logo from "../Basics/Logo";
import '../Basics/Button.scss';
import './Styles/ChangePassword.scss';
import Button from "../Basics/Button";
import InputField from "../Basics/InputField";



class ChangePasswordForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            currentPassword: "",
            newPassword: "",
            repeatPassword: ""
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
                            <Button color={''} clickHandler={this.changePassword} text={"Save"} width={"12rem"}/>
                            <Button color={'orange'} clickHandler="" text={"Cancel"} width={"12rem"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchPassword();
    }

    fetchPassword(){
        this.setState({
            oldPassword: ""
        });
    };

    changePassword() {

    }

    updateCurrentPassword = (e) => {
        this.setState({username: e.target.value});
    };

    updateNewPassword = (e) => {
        this.setState({password: e.target.value});
    };

    updateRepeatPassword = (e) => {
        this.setState({repeatPassword: e.target.value});
    };
}

export default ChangePasswordForm;