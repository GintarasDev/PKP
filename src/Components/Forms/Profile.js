import React from 'react';
import Logo from "../Basics/Logo";
import './Styles/Profile.scss';
import Button from "../Basics/Button";
import ListItem from "../Basics/ListItem";
import ChangePasswordForm from "./ChangePassword";
import EditProfileForm from "./EditProfile";
import LoginForm from "./Login";
import axios from "axios";


class ProfileForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            FullName: "",
            Username: "",
            Email: "",
            PhoneNumber: "",
            Address: "",
            Bios: "",
            Name: "",
            Surname: ""
        };
    }

    render() {
        return (
            <div className={'profileContainer'}>
                <div className={'profileCenter'}>
                    <Logo class={"logo"} width={"8rem"} height={"4rem"}/>
                </div>
                <div className='profileCenter'>
                    <label className={"profileText"}>{this.state.FullName}</label>
                </div>
                <div className={'profileCenter'}>
                    <label className={"profileText"}>Username: {this.state.Username}</label>
                </div>
                <div className={'profileCenter'}>
                    <label className={"profileText"}>Email: {this.state.Email}</label>
                </div>
                <div className={'profileCenter'}>
                    <label className={"profileText"}>Phone number: {this.state.PhoneNumber}</label>
                </div>
                <div className={'profileCenter'}>
                    <label className={"profileText"}>Address: {this.state.Address}</label>
                </div>
                <div className={'profileCenter'}>
                    <label className={"profileText"}>Bios:</label>
                </div>
                <div className={'profileCenter'}>
                    <p className={'profileText'}>{this.state.Bios}</p>
                </div>
                <div className={'profileImg'}>
                    <ListItem class={'profileFilterOnline'} iconPath={"online.svg"} width={"2rem"} height={"2rem"}/>
                </div>
                <div className={'profileButtonBox'}>
                    <Button class={"o-ActiveButton"} clickHandler={this.setActive.bind(this)} iconPath={'edit.svg'} width={"13rem"}
                            height={"1.5rem"} text={"Edit profile"}/>
                    <Button class={"o-ActiveButton"} clickHandler={this.setPassword.bind(this)} iconPath={'edit.svg'} width={"18rem"}
                            height={"1.5rem"} text={"Change password"}/>
                    <Button class={"o-ActiveButton"} clickHandler={this.signOut.bind(this)} width={"10rem"} height={"1.5rem"} text={"Sign out"}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log("compenent will mount");
        this.fetchUserInfo();
    }

    signOut = () => {
        //sign out logic here
        this.props.stateUpdater({currentPage: (<LoginForm stateUpdater={this.props.stateUpdater}/>)})
    };

    fetchUserInfo() {
        const url = 'http://localhost:8090/getUserData';
        axios.get(url, {params: {id: this.props.userId}, crossdomain: true})
            .then(response => this.setState({
                FullName: response.data.name + " " + response.data.surname,
                Name: response.data.name,
                Surname: response.data.surname,
                Username: response.data.username,
                Email: response.data.email,
                PhoneNumber: response.data.phoneNumber,
                Address: response.data.address,
                Bios: response.data.shortBios
            }))
            .catch(err => console.log(err));
    };

    setActive = () => {
        this.props.clickHandler(9, <EditProfileForm userId={this.props.userId} data={this.state}
                                                    stateUpdater={this.props.stateUpdater}
                                                    clickHandler={this.props.clickHandler}/>);
    };

    setPassword = () => {
        this.props.clickHandler(9, <ChangePasswordForm userId={this.props.userId} stateUpdater={this.props.stateUpdater}
                                                       clickHandler={this.props.clickHandler}/>);
    };
}

export default ProfileForm;