import React from 'react';
import './Styles/Group.scss';
import MemberStatistic from "../Basics/MemberStatistic";
import Button from "../Basics/Button";
import GroupEdit from "./GroupEdit";

class Group extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToDisplay: null,
            groupMembers: 0,
            onlineMembers: 0,
            groupTitle: "Student workers",
            administrator: "Tomas Lomas",
            description: "Lorem ipsim dolor sit amet, consectetur adipiscing elit. Vivamus venenatis pulvin ipsum dolor venenatis pulvin ipsum dolor venenatis pulvin ipsum dolor ipsum dolor venenatis pulvin ipsum dolor.",
            totalAssignedTasks: 84,
            totalAssignedTasksEsimate: 354,
            totalAvailableTime: 459,
            totalAssignedTasksProcentage: (354/459 * 100) > 100 ? 100 : (354/459 * 100)
            /*totalAssignedTasksEsimate / totalAvailableTime * 100*/
        };
        this.data = [];
    }

    render() {
        return (
            <div className="o-Group">
                <header className={"o-GroupInfo"}>
                    <div className={"o-MembersAmounts"}>
                        <img className={"o-NumberOfMembersImg"} src={require("../Assets/group.svg")}
                             alt={"Group has " + this.state.groupMembers + " members"}/> {this.state.groupMembers}
                        <img className={"o-NumberOfOnlineMembersImg"} src={require("../Assets/online.svg")}
                             alt={this.state.onlineMembers + " members are now online"}/> {this.state.onlineMembers}
                    </div>
                    <div className={"o-GroupTitle"}>
                        {this.state.groupTitle}
                    </div>
                    <Button class={"o-EditButton"} clickHandler={this.editGroup} iconPath={'edit.svg'} width={"12rem"}
                            height={"1.5rem"} text={"Edit group"}/>
                </header>
                <div className={"o-GroupData"}>
                    <div className={"o-GroupStatistics"}>
                        <div className={"o-InfoTitle"} >Group information</div>
                        <div>{"Administrator: " + this.state.administrator}</div>
                        <div className={"o-GroupDescritpion"} >{"Decription: " + this.state.description}</div>
                    </div>
                    <div className={"o-GroupStatistics"}>
                        <div className={"o-InfoTitle"} >Group workload</div>
                        <div>{"Total assigned task: " + this.state.totalAssignedTasks + ", " + this.state.totalAssignedTasksEsimate + "h"}</div>
                        <div>{"Total available time: " + this.state.totalAvailableTime}</div>
                        <div className={"o-WeekTimeBar"} >
                            <div className={(100 - this.state.totalAssignedTasksProcentage) >= 20 ? "o-WeekTimeFilled" :  "o-WeekTimeFilledRed"} style={{width: this.state.totalAssignedTasksProcentage + "%"}}>{this.state.totalAssignedTasksEsimate + "h"}</div>
                            <div className={(100 - this.state.totalAssignedTasksProcentage) >= 20 ? "o-WeekTimeFree" :  "o-WeekTimeFreeRed"} style={{width: (100 - this.state.totalAssignedTasksProcentage) + "%"}}>{(this.state.totalAvailableTime - this.state.totalAssignedTasksEsimate) + "h"}</div>
                        </div>
                    </div>
                </div>
                <div className={"o-MembersStatistics"}>
                    {this.state.dataToDisplay}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards = () => {
        //connect to api here :)
        this.groupsData = [
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }],
            [{title: "Number of members", value: "17"}, {
                title: "Assigned tasks",
                value: "37.5h"
            }, {title: "Administrator", value: "Lina Karbokaite"}, {
                title: "Description",
                value: "The best workers group of all time!!! you will never see better group... ever... in your whole fucking life!!!!!"
            }]
        ];
        this.groupsData.forEach(element => this.prepareData(element));
        this.setState({dataToDisplay: this.data});
    };

    prepareData = (data) => {
        this.data.push(
            (<MemberStatistic width={"35rem"} userName={"Leisure Bob Erfenstelsbein"} workingToday={8.5} todayLeft={3.5}
                              workingThisWeek={41} weekLeft={17} toDoTasks={7} toDoTasksNumber={4} inProgressTasks={4}
                              inProgressTasksNumber={2} doneTasks={14} doneTasksNumber={7} filled={32}/>)
        );
    };

    editGroup = () => {
        console.log("edit group");
        this.props.clickHandler(9, <GroupEdit returnHandler={this.props.clickHandler} />);
    }
}


export default Group;
