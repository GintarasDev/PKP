import React from 'react';
import Logo from "../Basics/Logo";
import './Styles/Profile.scss';
import '../Basics/Button.scss'
import Button from "../Basics/Button";
import ListItem from "../Basics/ListItem";


class ProfileForm extends React.Component{
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
            <div className={'profileContainer'}>
                    <div className={'profileTextBox'}>
                        <div className={'profileCenter'}>
                            <Logo class={"logo"} width={"8rem"} height={"4rem"}/>
                        </div>
                        <div className='profileCenter'>
                            <label className={"profileText"}>{this.state.Name}</label>
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
                        <div className='profileCenter' >
                            <text className={'profileText'}>{this.state.Bios}</text>
                        </div>
                        <div className={'profileImg'}>
                            <ListItem class={'profileFilterOnline'} iconPath={"online.svg"}  width={"2rem"} height={"2rem"}/>
                        </div>
                    </div>
                    <div className={'profileButtonBox'}>
                        <Button clickHandler="" iconPath={'edit.svg'} width={"13rem"} height={"1.5rem"} text={"Edit profile"} />
                        <Button clickHandler="" iconPath={'edit.svg'} width={"18rem"} height={"1.5rem"} text={"Change password"} />
                    </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo(){
        this.setState({
            Name: "Tomas Lomas",
            Username: "ltv.tomaslom",
            Email: "tomas.lomas759@outlook.com",
            PhoneNumber: "+37064989549",
            Address: "alaviju g 144-42, Vilnius",
            Bios: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis pulvinar elit, in dapibus tortor condimentum in. Pellentesque venenatis arcu in massa vehicula ultrices. Fusce aliquam velit in risus eleifend, condimentum porta diam ultrices. Vestibulum convallis ligula vel elit porttitor, pharetra semper ante aliquet."
        });
    };
}

export default ProfileForm;