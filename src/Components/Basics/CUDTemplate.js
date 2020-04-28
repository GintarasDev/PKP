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
        this.AssignedUserIdsList = [];
    };

    render() {
        this.prepareAssignedUsers();
        return (
            <div className="boardTemplateContainer">
                <label>{this.props.value}</label>
                <div className={'boardInputs'}>
                    <InputField class={"o-CudInput"} onChange={this.updateTitle} value={this.props.title} width={'100%'}
                                placeholder={this.props.titlePlaceholder}/>
                    <InputField class={"o-CudInput"} onChange={this.updateDescription} value={this.props.description}
                                type={'area'} width={'100%'} height={'12rem'}
                                placeholder={this.props.descriptionPlaceholder}/>
                </div>
                {
                    this.props.type === "task" ?
                        (<div className={'boardTemplateRow o-AdditionalRow'}>
                            <div>
                                <span className={"o-DateTitle"}>Start date</span>
                                <InputField onChange={this.updateStart} type={"date"} width={'15rem'}
                                            placeholder={'Start'} value={this.props.startDate} />
                            </div>
                            <div className={"ob-AddAdditionalMargin"}>
                                <span className={"o-DateTitle"}>Deadline</span>
                                <InputField onChange={this.updateDeadline} type={"date"} width={'15rem'}
                                            placeholder={'Deadline'} value={this.props.deadlineDate} />
                            </div>
                            <InputField onChange={this.updateEstimatedTime} class={"o-EstimatedTime"} width={'12rem'}
                                        placeholder={'Estimated time'} value={this.props.estimatedTime} />
                        </div>) : ""
                }
                <div className={'boardTemplateRow boardTemplateAssignedUsers'}>
                    <label className={'boardTemplateInline'}>Assigned Users</label>
                    <div onClick={this.Bar}>
                        {this.state.img}
                    </div>
                    {this.state.overlay}
                    <div className={"ob-MiniSearchBarPopup"} >
                        {this.state.popUp}
                    </div>
                </div>
                <div className={'boardTemplateUserListTaskHeight '}>
                    {this.AssignedUserList}
                </div>
            </div>
        );
    }

    addCurrentUser = () => {
        this.AssignedUserList = [];
        this.AssignedUserList.push(
            <User id={this.props.assigneeId} name={this.props.assigneeFullName} isRemovable={true}/>
        );
        console.log("add current user," + this.props.assigneeFullName + " assignedUserList:");
        console.log(this.AssignedUserList);
    };

    prepareAssignedUsers = () => {
        if (!(this.props.assignedUsers === undefined || this.props.assignedUsers === null)) {
            this.AssignedUserList = [];
            this.props.assignedUsers.forEach(user => {
                this.AssignedUserList.push(
                    <User id={user.id} name={user.name + " " + user.surname} isRemovable={true}/>
                );
            });
            return;
        }
        if (this.AssignedUserList.length === 0) {
            this.addCurrentUser();
        }
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
        this.setState({popUp: (<AssignBar isGroups={this.props.isGroups} assignedUser={this.addUser.bind(this)}/>)});
        this.setState({overlay: (<div className={'boardTemplateClosePopUp'} onClick={this.closePopup}/>)})
    };

    addUser = (id, name) => {
        if (this.props.isTaskAssignee) {
            this.AssignedUserList = [];
        }
        this.AssignedUserList.push(
            <User id={id} name={name} isRemovable={true}/>
        );
        this.AssignedUserIdsList.push(id);
        this.props.dataUpdater({
            assignedUsers: this.AssignedUserIdsList
        });
        this.forceUpdate();
    };

    closePopup = () => {
        this.setState({popUp: null});
        this.setState({overlay: null})
    }
}

export default CUDTemplate;