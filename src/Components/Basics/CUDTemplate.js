import React from 'react';
import './CUDTemplate.scss';
import InputField from "../Basics/InputField";
import AssignBar from "./AssignBar";
import User from "./User";

class CUDTemplate extends React.Component {
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
                    <InputField onChange={this.updateTitle} width={'100%'} placeholder={this.props.titlePlaceholder}/>
                    <InputField onChange={this.updateDescription} class={"o-InputField"} type={'area'} width={'100%'} height={'12rem'} placeholder={this.props.descriptionPlaceholder}/>
                </div>
                {
                    this.props.type === "task" ?
                    (<div className={'boardTemplateRow o-AdditionalRow'}>
                        <span className={"o-DateTitle"} >Start date</span>
                        <InputField onChange={this.updateStart} type={"date"} width={'15rem'} placeholder={'Start'}/>
                        <span className={"o-DateTitle o-toSide"} >Deadline</span>
                        <InputField onChange={this.updateDeadline} type={"date"} width={'15rem'} placeholder={'Deadline'}/>
                        <InputField onChange={this.updateEstimatedTime} class={"o-EstimatedTime"} width={'12rem'} placeholder={'Estimated time'}/>
                    </div>) : ""
                }
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
                <div className={'boardTemplateUserListTaskHeight '}>
                    {this.AssignedUserList}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.prepareAssignedUsers();
    }

    prepareAssignedUsers = () => {
      this.props.assignedUsers.forEach(user => {
          this.AssignedUserList.push(
              <User id={user.id} name={user.name + " " + user.surname} isRemovable={true}/>
          );
          this.forceUpdate();
      });
    };

    updateEstimatedTime = (e) => {
        this.props.dataUpdater({estimatedTime: e.target.value});
    };

    updateDeadline = (e) => {
        this.props.dataUpdater({deadlineDate: e.target.value});
    };

    updateStart = (e) => {
        this.props.dataUpdater({startDate: e.target.value});
    };

    updateTitle = (e) => {
      this.props.dataUpdater({title: e.target.value});
    };

    updateDescription = (e) => {
        this.props.dataUpdater({description: e.target.value});
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

export default CUDTemplate;