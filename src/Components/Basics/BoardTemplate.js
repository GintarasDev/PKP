import React from 'react';
import './BoardTemplate.scss';
import InputField from "../Basics/InputField";
import AssignBar from "./AssignBar";
import User from "./User";
import Button from "./Button";

class BoardTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            img: (<img src={require("../Assets/new.svg")} className={'boardTemplateInlineSat'} alt={"new"}/>),
            popUp: null,
            overlay: null
        };
        this.AssignedUserList = [];
    };

    render() {
        return (
            <div className="boardCreationContainer">
                <label>{this.props.value}</label>
                <div className={'boardTemplateAdjust'}>
                    <InputField width={'100%'} placeholder={'Board title'}/>
                    <InputField type={'area'} width={'100%'} height={'12rem'} placeholder={'Board description'}/>
                </div>
                <div className={'boardTemplateRow'}>
                    <label className={'boardTemplateInline'}>Assigned Users</label>
                    <div className={'boardTemplateInlineImg'} onClick={this.Bar}>
                        {this.state.img}
                    </div>
                    {this.state.overlay}
                    <div>
                        {this.state.popUp}
                    </div>
                </div>
                <div className={'boardTemplateUserListHeight'}>
                    {this.AssignedUserList}
                </div>
            </div>
        );
    };

    Bar = () => {
        this.setState({popUp: (<AssignBar assignedUser={this.addUser.bind(this)}/>)});
        this.setState({overlay: (<div className={'boardTemplateClosePopUp'} onClick={this.closePopup}> </div>) })
    };

    addUser = (id) => {
        this.AssignedUserList.push(
            <User id={id} name={'users'} isRemovable={true}/>
            );
        this.forceUpdate();
    };

    closePopup = () => {
        this.setState({popUp: null});
        this.setState({overlay: null})
    }
}

export default BoardTemplate;