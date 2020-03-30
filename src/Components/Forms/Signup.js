import React from 'react';
import './Styles/Signup.scss';
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import Logo from "../Basics/Logo";
import LoginForm from "./Login";
import PopUpError from "../Basics/PopUpError";

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
            console.log("Congrats, you've just Signed Up: \n" +
                this.state.name + " - " + this.state.surname + " - \n" +
                this.state.username + " - " + this.state.email + " - \n" +
                this.state.address + " - " + this.state.phoneNumber + " - \n" +
                this.state.password + " - " + this.state.repeatPassword + " - \n" +
                this.state.shortBios
            );
            //Connect signup form to backend here! (and remove console log) :)
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
