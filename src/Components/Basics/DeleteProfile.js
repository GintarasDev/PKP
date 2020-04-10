import React from 'react';
import './DeleteProfile.scss';
import InputField from "../Basics/InputField";
import Button from "./Button";

class DeleteProfile extends React.Component {
    handleClick = () => {
        if(this.props.clickHandler === undefined || this.props.clickHandler === null) {
        } else {
            this.props.clickHandler();
        }
    };


    render() {
        if(this.props.type === "password")
        {
        return (
            <div className="AreYouSure">
                <div className={'DeletePadding'}>
                    <label className={'DeleteText'}>Are you sure you want to  <strong>delete</strong> your profile?</label>
                </div>
                <div>
                    <label className={'DeleteText'}>Enter your password to confirm</label>
                </div>
                <div className={'DeleteAdjustField'} >
                    <InputField width={'22rem'} type={'password'} placeholder={'Password'}/>
                </div>
                <div className={'DeleteContainer'}>
                    <Button color={'red'} text={'Delete profile'} width={'12rem'}/>
                    <Button clickHandler={this.handleClick.bind(this)} text={'Cancel'} width={'12rem'}/>
                </div>
            </div>
        );
        } else {
            return (
                <div className={'AreYouSure'}>
                    <div className={'DeletePadding'}>
                        <label className={'DeleteText'}>Are you sure you want to  <strong>delete</strong> {this.props.call}</label>
                    </div>
                    <div className={'DeleteContainer'}>
                        <Button color={'red'} text={'Delete ' + this.props.dynamic} width={'12rem'}/>
                        <Button clickHandler={this.handleClick.bind(this)} text={'Cancel'} width={'12rem'}/>
                    </div>
                </div>
            )
        }
    }
}

export default DeleteProfile;