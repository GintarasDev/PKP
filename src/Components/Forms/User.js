import React from 'react';
import Logo from "../Basics/Logo";
import '../Basics/Button.scss';
import './Styles/User.scss';
import Button from "../Basics/Button";
import ListItem from "../Basics/ListItem";
import ScheduleForm from "./Schedule";

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: "",
            Username: "",
            Email: "",
            PhoneNumber: "",
            Address: "",
            Bios: ""
        };
    }

    render() {
        return (
            <div className={'userContainer'}>
                <div className={'userCenter'}>
                    <Logo class={"logo"} width={"8rem"} height={"4rem"}/>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>{this.state.Name}</label>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>Username: {this.state.Username}</label>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>Email: {this.state.Email}</label>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>Phone number: {this.state.PhoneNumber}</label>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>Address: {this.state.Address}</label>
                </div>
                <div className={'userCenter'}>
                    <label className={"userText"}>Bios:</label>
                </div>
                <div className={'userCenter'}>
                    <text className={'userText'}>{this.state.Bios}</text>
                </div>
                <div className={'userCenter'}>
                    <ListItem class={'userFilterOnline'} iconPath={"online.svg"} width={"2rem"}/>
                </div>
                <div className={'userCenter'}>
                    <Button clickHandler={this.openUserSchedule} width={"17rem"} height={"2rem"} text={"View work schedule"}/>
                </div>
            </div>
        );
    }

    openUserSchedule = () => {
      //todo: add backend to user schedule page
        this.props.clickHandler(9, <ScheduleForm useTitle={true} />)
    };

    componentDidMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo() {
        //todo: fetch user info here
        this.setState({
            Name: "Alexandr Misspot",
            Username: "ltv.stud.alexmissp",
            Email: "alexander.misspot@outlook.com",
            PhoneNumber: "+37064989549",
            Address: "alaviju g 144-42, Vilnius",
            Bios: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis pulvinar elit, in dapibus tortor condimentum in. Pellentesque venenatis arcu in massa vehicula ultrices. Fusce aliquam velit in risus eleifend, condimentum porta diam ultrices. Vestibulum convallis ligula vel elit porttitor, pharetra semper ante aliquet."
        });
    };
}

export default UserForm;