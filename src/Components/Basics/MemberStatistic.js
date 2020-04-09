import React from 'react';
import './MemberStatistic.scss';
import Logo from "../Basics/Logo";

class MemberStatistic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filledProcentage: (this.props.filled / this.props.workingThisWeek * 100) > 100 ? 100 : this.props.filled / this.props.workingThisWeek * 100
        };
    }

    render() {
        return (
            <div className="o-MemberStatisticFormWrap" style={{width: this.props.width}} >
                <div>
                    <Logo width={"2.5rem"} height={"2.5rem"} />
                    <span className={"o-StatisticUserName"} >{this.props.userName}</span>
                </div>
                <div className={"o-MemberStatisticData"} >
                    <div>{"Working today: " + this.props.workingToday + "h of which " + this.props.todayLeft + "h left"}</div>
                    <div>{"Working this week: " + this.props.workingThisWeek + "h of which " + this.props.weekLeft + "h left"}</div>
                    <div>{"Total To do tasks: " + this.props.toDoTasksNumber + ", ~" + this.props.toDoTasks + "h"}</div>
                    <div>{"Total In progress tasks: " + this.props.inProgressTasksNumber + ", ~" + this.props.inProgressTasks + "h"}</div>
                    <div>{"Total Done tasks: " + this.props.doneTasksNumber + ", ~" + this.props.doneTasks + "h"}</div>
                    <div className={"o-WeekTimeBar"} >
                        <div className={(100 - this.state.filledProcentage) >= 20 ? "o-WeekTimeFilled" :  "o-WeekTimeFilledRed"} style={{width: this.state.filledProcentage + "%"}}>{this.props.filled + "h"}</div>
                        <div className={(100 - this.state.filledProcentage) >= 20 ? "o-WeekTimeFree" :  "o-WeekTimeFreeRed"} style={{width: (100 - this.state.filledProcentage) + "%"}}>{(this.props.workingThisWeek - this.props.filled) + "h"}</div>
                    {/*    (current working this week - of which left this week) + to do tasks + current in progress tasks = this.props.filled; working this week - this.props.filled = time left*/}
                    </div>
                </div>
            </div>
        );
    }

}


export default MemberStatistic;
