import React from 'react';
import './Styles/Login.scss';
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import Link from "../Basics/Link";
import Logo from "../Basics/Logo";
import SignupForm from "./Signup";
import Navigation from "./Navigation";
import axios from "axios";
import PopUpError from "../Basics/PopUpError";
import Validator from "../Helpers/Validation";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: "",
            error: ""
        }

    }

    render() {
        return (
            <div className="o-LoginFormWrap">
                <Button clickHandler={this.signUp} text={"Sign up"} width={"10rem"}/>
                <div className="o-LoginForm">
                    <Logo width={"25rem"} height={"8rem"}/>
                    <InputField onChange={this.updateUsername} type={"text"} placeholder={"Username"} width={"25rem"}/>
                    <InputField onChange={this.updatePassword} type={"password"} placeholder={"Password"} width={"25rem"}/>
                    <Button clickHandler={this.logIn} text={"Log in"} width={"10rem"}/>
                    <Link text={"Forgot my password"} href={"https://www.supportivecarematters.org/info/wher-can-i-find-emotional-support/"}/>
                </div>
                {this.state.error}
            </div>
        );
    }

    updateUsername = (e) => {
       this.setState({username: e.target.value});
    };

    updatePassword = (e) => {
        this.setState({password: e.target.value});
    };

    logIn = () => {
        if (this.validateData()) {
            this.saveData(this.getUserData());
        }
    };

    saveData = (userData) => {
        const url='http://localhost:8090/login';
        axios({
            method: 'post',
            url: url,
            data: userData
        })
            .then(response=>this.loginSuccessful(response))
            .catch(err=>console.log(err))
    };

    loginSuccessful = (response) => {
        if (response.status === 200) {
            console.log("success");
            this.props.stateUpdater({currentPage: (<Navigation userEssentialData={response.data} stateUpdater={this.props.stateUpdater} />)})
        } else {
            console.log("failed");
        }
    };

    getUserData = () => {
        return {
            password: this.state.password,
            username: this.state.username
        };
    };

    signUp = () => {
        this.props.stateUpdater({currentPage: (<SignupForm stateUpdater={this.props.stateUpdater}/>)})
    };

    validateData = () => {
        let errors = Validator.checkIfAllFilled([{element: this.state.password, errorMessage: "Please enter your password"},
            {element: this.state.username, errorMessage: "Please enter your username"}]);
        if (errors.errorsCount > 0) {
            this.setState({error: (<PopUpError message={errors.errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
            return false;
        } else {
            return true;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: null});
    };
}

export default LoginForm;
