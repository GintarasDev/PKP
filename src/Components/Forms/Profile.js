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
            <div>
                    <div>
                        <div className={'center'}>
                            <Logo class={"logo"} width={"8rem"} height={"4rem"}/>
                        </div>
                        <div className='center'>
                            <label className={"text"}>{this.state.Name}</label>
                        </div>
                        <div>
                            <label className={"text"}>Username: {this.state.Username}</label>
                        </div>
                        <div>
                            <label className={"text"}>Email: {this.state.Email}</label>
                        </div>
                        <div>
                            <label className={"text"}>Phone number: {this.state.PhoneNumber}</label>
                        </div>
                        <div>
                            <label className={"text"}>Address: {this.state.Address}</label>
                        </div>
                        <div>
                            <label className={"text"}>Bios:</label>
                            {this.state.Bios}
                        </div>
                        <div className={'center'}>
                            <ListItem iconPath={"online.svg"}  width={"2rem"} height={"2rem"}/>
                        </div>
                    </div>
                    <div>
                        <Button width={"10rem"} height={"5rem"} text={"Edit profile"} />
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