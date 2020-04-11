import React from 'react';
import Logo from "../Basics/Logo";
import '../Basics/Button.scss';
import './Styles/EditProfile.scss';
import Button from "../Basics/Button";
import InputField from "../Basics/InputField";
import ProfileForm from "./Profile";
import DeleteProfile from "../Basics/DeleteProfile";
import LoginForm from "./Login";

class EditProfileForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            surname: "",
            username: "",
            email: "",
            address: "",
            phoneNumber: "",
            bios: "",
            error: null,
            popUp: null
        };
    }
    render() {
        return (
            <div className={'eProfileContainer'}>
                <div className={'eProfileAdjust-text'}>
                    <label className={"eProfileText"}>Edit profile</label>
                </div>
                <div className={'eProfileAdjust'}>
                    <Logo width={"8rem"} height={"8rem"}/>
                </div>
                <div className={'eProfileRow'}>
                    <InputField class={"eProfile-Input"} onChange={this.updateName} type={"text"} value={this.state.name} placeholder={this.state.name} width={"21.5rem"}/>
                    <InputField class={"eProfile-Input"} onChange={this.updateSurname} type={"text"} value={this.state.surname} placeholder={this.state.surname} width={"21.5rem"}/>
                </div>
                <div className={'eProfileRow'}>
                    <InputField class={"eProfile-Input"} onChange={this.updateUsername} type={"text"} value={this.state.username} placeholder={this.state.username} width={"21.5rem"}/>
                    <InputField class={"eProfile-Input"} onChange={this.updateEmail} type={"text"} value={this.state.email} placeholder={this.state.email} width={"21.5rem"}/>
                </div>
                <div className={'eProfileRow'}>
                    <InputField class={"eProfile-Input"} onChange={this.updateAddress} type={"text"} value={this.state.address} placeholder={this.state.address} width={"21.5rem"}/>
                    <InputField class={"eProfile-Input"} onChange={this.updatePhoneNumber} type={"text"} value={this.state.phoneNumber} placeholder={this.state.phoneNumber} width={"21.5rem"}/>
                </div>
                <div className={'eProfileRow'}>
                    <InputField class={"eProfile-Input"} onChange={this.updateShortBios} type={"area"} value={this.state.bios} placeholder={this.state.bios} width={"45rem"} height={"8rem"} />
                </div>
                <div className={'eProfileContainerBT eProfileRow'}>
                    <Button color={'red'} clickHandler={this.popUp} text={"Delete profile"} width={"12rem"}/>
                    <Button clickHandler={this.saveChanges} text={"Save changes"} width={"13rem"}/>
                    <Button color={'orange'} clickHandler={this.cancelChanges} text={"Cancel changes"} width={"14rem"}/>
                </div>
                {this.state.popUp}
            </div>
        );
    }

    componentDidMount() {
        this.fetchUserInfo();
    }

    fetchUserInfo(){
        this.setState({
            name: "Tomas",
            surname: "Lomas",
            username: "ltv.tomaslom",
            email: "tomas.lomas759@outlook.com",
            address: "alaviju g 144-42, Vilnius",
            phoneNumber: "+37064989549",
            bios: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis pulvinar elit, in dapibus tortor condimentum in. Pellentesque venenatis arcu in massa vehicula ultrices.Lorem ipsum dolor sit amet, consectetur ",
        });
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile call={"your profile?"} dynamic={"profile"} message={"Passwords do not match"} deleteClickHandler={this.deleteProfileConfirmed} cancelClickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };

    saveChanges = () => {
        //save changes logic goes here
        this.props.clickHandler(9, <ProfileForm clickHandler={this.props.clickHandler}/>)
    };

    deleteProfileConfirmed = () => {
        //delete profile logic here
        this.props.stateUpdater({currentPage: (<LoginForm stateUpdater={this.props.stateUpdater}/>)});
    };

    cancelChanges = () => {
        this.props.clickHandler(9, <ProfileForm clickHandler={this.props.clickHandler}/>);
    };

    updateName = (e) => {
        this.setState({name: e.target.value});
    };

    updateSurname = (e) => {
        this.setState({surname: e.target.value});
    };

    updateUsername = (e) => {
        this.setState({username: e.target.value});
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
        this.setState({bios: e.target.value});
    };
}

export default EditProfileForm;