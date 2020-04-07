import React from 'react';
import './Styles/Signup.scss';
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import Logo from "../Basics/Logo";
import LoginForm from "./Login";
import PopUpError from "../Basics/PopUpError";
import axios from 'axios';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.user = {};
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
                <Button clickHandler={this.logIn} text={"Log in"} width={"10rem"}/>
                <div className="o-Signup">
                    <Logo width={"20rem"} height={"5rem"}/>
                    <div className={"columns"}>
                        <div className={"column-one"}>
                            <InputField onChange={this.updateName} type={"text"} placeholder={"Name*"} width={"20rem"}/>
                            <InputField onChange={this.updateUsername} type={"text"} placeholder={"Username*"} width={"20rem"}/>
                            <InputField onChange={this.updateAddress} type={"text"} placeholder={"Address"} width={"20rem"}/>
                            <InputField onChange={this.updatePassword} type={"password"} placeholder={"Password*"} width={"20rem"}/>
                        </div>
                        <div className={"column-two"}>
                            <InputField onChange={this.updateSurname} type={"text"} placeholder={"Surname*"} width={"20rem"}/>
                            <InputField onChange={this.updateEmail} type={"text"} placeholder={"Email*"} width={"20rem"}/>
                            <InputField onChange={this.updatePhoneNumber} type={"text"} placeholder={"Phone number"} width={"20rem"}/>
                            <InputField onChange={this.updateRepeatPassword} type={"password"} placeholder={"Repeat password*"} width={"20rem"}/>
                        </div>
                    </div>
                    <InputField class={"short-bios"} onChange={this.updateShortBios} type={"area"} placeholder={"Short bios"} width={"41.5rem"}/>
                    <Button clickHandler={this.signUp} text={"Sign up"} width={"10rem"}/>
                </div>
                {this.state.error}
            </div>
        );
    }

    signUp = () => {
        if(this.validateData()) {
            this.saveData();
        }
    };

    saveData = () => {
        const url='http://localhost:8080/signup';
        const person = this.state;
        console.log(person);
        axios({
            method: 'post',
            url: url,
            data: person
        })
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
    };

    getUserData = () => {
        return this.user = {
            password: this.state.password,
            username: this.state.username,
            name: this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            shortBios: this.state.shortBios,
        }
    };

    validateData = () => {
        this.errorsCount = 0;
        this.checkIfEmpty(this.state.name, "Name field cannot be left empty");
        this.checkIfEmpty(this.state.surname, "Surname field cannot be left empty");
        this.checkIfEmpty(this.state.username, "Username field cannot be left empty");
        this.checkIfEmpty(this.state.email, "Email field cannot be left empty");
        this.checkIfEmpty(this.state.password, "Password field cannot be left empty");
        this.checkIfEmpty(this.state.repeatPassword, "Repeat password field cannot be left empty");
        if (this.state.repeatPassword !== this.state.password){
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
