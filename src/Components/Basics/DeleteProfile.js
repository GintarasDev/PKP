import React from 'react';
import './DeleteProfile.scss';
import InputField from "../Basics/InputField";
import Button from "./Button";

class DeleteProfile extends React.Component {
    handleCancelClick = () => {
        if (this.props.cancelClickHandler === undefined || this.props.cancelClickHandler === null) {
        } else {
            this.props.cancelClickHandler();
        }
    };

    handleDeleteClick = () => {
        if (this.props.deleteClickHandler === undefined || this.props.deleteClickHandler === null) {
        } else {
            this.props.deleteClickHandler();
        }
    };

    render() {
        return (
            <div className={'AreYouSure'}>
                <div className={'DeletePadding'}>
                    <label className={'DeleteText'}>Are you sure you want
                        to <strong>delete</strong> {this.props.call}</label>
                </div>
                {this.props.type === "password" ? (
                    <div>
                        <div>
                            <label className={'DeleteText'}>Enter your password to confirm</label>
                        </div>
                        <div className={'DeleteAdjustField'}>
                            <InputField width={'22rem'} type={'password'} placeholder={'Password'}/>
                        </div>
                    </div>
                ) : ""}
                <div className={'DeleteContainer'}>
                    <Button class={"o-PopupButtons"} clickHandler={this.handleDeleteClick.bind(this)} color={'red'}
                            text={'Delete ' + this.props.dynamic} width={'12rem'}/>
                    <Button class={"o-PopupButtons"} clickHandler={this.handleCancelClick.bind(this)} text={'Cancel'} width={'12rem'}/>
                </div>
            </div>
        );
    }
}

export default DeleteProfile;