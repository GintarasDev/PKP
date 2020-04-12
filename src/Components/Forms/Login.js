import React from 'react';
import './Styles/Login.scss';
import InputField from "../Basics/InputField";
import Button from "../Basics/Button";
import Link from "../Basics/Link";
import Logo from "../Basics/Logo";
import SignupForm from "./Signup";
import Navigation from "./Navigation";
import axios from "axios";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: "",
            username: ""
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
        console.log("Congrats, you've just loged in: " + this.state.username + " - " + this.state.password);
        this.saveData();
        this.props.stateUpdater({currentPage: (<Navigation stateUpdater={this.props.stateUpdater} />)})
    };

    saveData = () => {
        const url='http://localhost:8080/login';
        const fakeShit = this.getUserData();
        axios({
            method: 'post',
            url: url,
            data: fakeShit
        })
            .then(data=>console.log(data))
            .catch(err=>console.log(err))
    };

    getUserData = () => {
        return this.user = {
            password: this.state.password,
            username: this.state.username
        }
    };

    signUp = () => {
        this.props.stateUpdater({currentPage: (<SignupForm stateUpdater={this.props.stateUpdater}/>)})
    }
}


export default LoginForm;
