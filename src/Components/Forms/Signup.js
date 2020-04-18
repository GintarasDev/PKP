import React from 'react';
import './Styles/Signup.scss';
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import Logo from "../Basics/Logo";
import LoginForm from "./Login";
import PopUpError from "../Basics/PopUpError";
import axios from 'axios';
import Navigation from "./Navigation";
import Validator from "../Helpers/Validation";

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            repeatPassword: "",
            username: "",
            name: "",
            surname: "",
            email: "",
            address: "",
            phoneNumber: "",
            shortBios: "",
            error: null
        };
        this.errorsCount = 0;
    }

    render() {
        return (
            <div className="o-SignupFormWrap">
                <Button class={".oa-Login"} clickHandler={this.logIn} text={"Log in"} width={"10rem"}/>
                <div className={"ob-InputFields"}>
                    <Logo width={"5rem"} height={"5rem"}/>
                    <br/>
                    <InputField class={"ob-InputField"} onChange={this.updateName} type={"text"} placeholder={"Name*"}
                                width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updateSurname} type={"text"}
                                placeholder={"Surname*"}
                                width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updateUsername} type={"text"}
                                placeholder={"Username*"} width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updateEmail} type={"text"} placeholder={"Email*"}
                                width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updateAddress} type={"text"}
                                placeholder={"Address"}
                                width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updatePhoneNumber} type={"text"}
                                placeholder={"Phone number"} width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updatePassword} type={"password"}
                                placeholder={"Password*"}
                                width={"100%"}/>
                    <InputField class={"ob-InputField"} onChange={this.updateRepeatPassword} type={"password"}
                                placeholder={"Repeat password*"}
                                width={"100%"}/>
                    <InputField class={"short-bios"} onChange={this.updateShortBios} type={"area"}
                                placeholder={"Short bios"} width={"100%"}/>
                    <Button class={".ob-Signup"} clickHandler={this.signUp} text={"Sign up"} width={"10rem"}/>
                </div>
                {this.state.error}
            </div>
        );
    }

    signUp = () => {
        if (this.validateData()) {
            this.saveData(this.getUserData());
        }
    };

    signUpSuccessful = (response) => {
        if (response.status === 200) {
            this.props.stateUpdater({
                currentPage: (<Navigation userEssentialData={response.data} stateUpdater={this.props.stateUpdater}/>)
            })
        } else {
            this.setState({
                error: (<PopUpError message={"Unknown error occurred while registering, please try again latter"}
                                    clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
        }
    };

    saveData = (userData) => {
        const url = 'http://localhost:8090/signup';
        axios({
            method: 'post',
            url: url,
            data: userData
        })
            .then(response => this.signUpSuccessful(response))
            .catch(err => console.log(err))
    };

    getUserData = () => {
        return {
            password: this.state.password,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            shortBios: this.state.shortBios,
        };
    };

    validateData = () => {
        let errors = Validator.checkIfAllFilled([
            {element: this.state.name, errorMessage: "Name field cannot be left empty"},
            {element: this.state.surname, errorMessage: "Surname field cannot be left empty"},
            {element: this.state.username, errorMessage: "Username field cannot be left empty"},
            {element: this.state.email, errorMessage: "Email field cannot be left empty"}
        ]);
        let passwordErrors = Validator.checkPassword(this.state.password, this.state.repeatPassword, "Passwords do not match or passwords field is empty");
        if (errors.errorsCount > 0) {
            this.setState({
                error: (
                    <PopUpError message={errors.errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
            return false;
        } else if (passwordErrors.errorsCount > 0) {
            this.setState({
                error: (<PopUpError message={passwordErrors.errorMessage} clickHandler={this.removeErrorMessage}
                                    width={"20rem"}/>)
            });
            return false;
        } else {
            return true;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: null});
    };

    logIn = () => {
        this.props.stateUpdater({currentPage: (<LoginForm stateUpdater={this.props.stateUpdater}/>)})
    };

    updateUsername = (e) => {
        this.setState({username: e.target.value});
    };

    updatePassword = (e) => {
        this.setState({password: e.target.value});
    };

    updateRepeatPassword = (e) => {
        this.setState({repeatPassword: e.target.value});
    };

    updateName = (e) => {
        this.setState({name: e.target.value});
    };

    updateSurname = (e) => {
        this.setState({surname: e.target.value});
    };

    updateEmail = (e) => {
        this.setState({email: e.target.value});
    };

    updateAddress = (e) => {
        this.setState({address: e.target.value});
    };

    updatePhoneNumber = (e) => {
        this.setState({phoneNumber: e.target.value});
    };

    updateShortBios = (e) => {
        this.setState({shortBios: e.target.value});
    }
}


export default SignupForm;
