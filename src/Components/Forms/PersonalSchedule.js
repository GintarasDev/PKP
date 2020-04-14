import React from 'react';
import '../Basics/Button.scss';
import './Styles/PersonalSchedule.scss';
import InputField from "../Basics/InputField";
import ScheduleForm from "./Schedule";
import Navigation from "./Navigation";
import axios from "axios";
import Button from "../Basics/Button";
import Validator from "../Helpers/Validation";
import PopUpError from "../Basics/PopUpError";

class PersonalSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            workSchedule: null,
            date: "",
            from1: "",
            to1: "",
            workFromHome1: false,
            from2: "",
            to2: "",
            workFromHome2: false,
            from3: "",
            to3: "",
            workFromHome3: false,
            break0: "- 2h 10m break",
            break1: "- 30m break",
            person: "15",
            error: null
        };
    }

    render() {
        return (
            <div className={'o-PersonalScheduleContainer'}>
                <div className={'o-PersonalScheduleTitle'}>Set work schedule <Button clickHandler={this.setSchedule}
                                                                                     width={'5rem'} text={'set'}/></div>
                <InputField onChange={this.updateWorkDate} class={"o-WorkTimeDate"} type={"date"} width={"16rem"}/>
                <div className={"o-WorkTimeRow"}>
                    <span>1.</span>
                    <InputField onChange={this.updateWorkStart1} class={"o-WorkTimeInput"} type={"time"}
                                width={"16rem"}/>
                    <InputField onChange={this.updateWorkEnd1} class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField onInput={this.updateWorkingFromHome1} class={"o-WorkTimeInputCheckbox"}
                                title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                    <span className={"o-WorkTimeBreak"}>{this.state.break0}</span>
                </div>
                <div className={"o-WorkTimeRow"}>
                    <span>2.</span>
                    <InputField onChange={this.updateWorkStart2} class={"o-WorkTimeInput"} type={"time"}
                                width={"16rem"}/>
                    <InputField onChange={this.updateWorkEnd2} class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField onInput={this.updateWorkingFromHome2} class={"o-WorkTimeInputCheckbox"}
                                title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                    <span className={"o-WorkTimeBreak"}>{this.state.break1}</span>
                </div>
                <div className={"o-WorkTimeRow"}>
                    <span>3.</span>
                    <InputField onChange={this.updateWorkStart3} class={"o-WorkTimeInput"} type={"time"}
                                width={"16rem"}/>
                    <InputField onChange={this.updateWorkEnd3} class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField onInput={this.updateWorkingFromHome3} class={"o-WorkTimeInputCheckbox"}
                                title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                </div>
                <div className={"o-ScheduleForm"}>
                    <ScheduleForm userId={this.props.userId} scheduleContainerClass={"o-ScheduleContainerB"}/>
                </div>
                {this.state.error}
            </div>
        );
    }

    validateData = () => {
        let errors = Validator.checkIfAllFilled([
            {element: this.state.date, errorMessage: "date field cannot be left empty"},
            {element: this.state.from1, errorMessage: "working from field cannot be left empty"},
            {element: this.state.to1, errorMessage: "working to field cannot be left empty"},
            {element: this.state.from2, errorMessage: "working from field cannot be left empty"},
            {element: this.state.to2, errorMessage: "working to field cannot be left empty"},
            {element: this.state.from3, errorMessage: "working from field cannot be left empty"},
            {element: this.state.to3, errorMessage: "working to field cannot be left empty"}
        ]);
        let timeErrors1 = Validator.checkIfGreater(this.state.from1, this.state.to1, "working until cannot be lower than working from");
        let timeErrors2 = Validator.checkIfGreater(this.state.from2, this.state.to2, "working until cannot be lower than working from");
        let timeErrors3 = Validator.checkIfGreater(this.state.from3, this.state.to3, "working until cannot be lower than working from");
        if (errors.errorsCount > 0) {
            this.setState({
                error: (
                    <PopUpError message={errors.errorMessage} clickHandler={this.removeErrorMessage} width={"20rem"}/>)
            });
            return false;
        } else if (timeErrors1.errorsCount > 0) {
            this.setState({
                error: (<PopUpError message={timeErrors1.errorMessage} clickHandler={this.removeErrorMessage}
                                    width={"20rem"}/>)
            });
            return false;
        } else if (timeErrors2.errorsCount > 0) {
            this.setState({
                error: (<PopUpError message={timeErrors2.errorMessage} clickHandler={this.removeErrorMessage}
                                    width={"20rem"}/>)
            });
            return false;
        } else if (timeErrors3.errorsCount > 0) {
            this.setState({
                error: (<PopUpError message={timeErrors3.errorMessage} clickHandler={this.removeErrorMessage}
                                    width={"20rem"}/>)
            });
            return false;
        } else {
            return true;
        }
    };

    removeErrorMessage = () => {
        this.setState({error: null});
    };

    setSchedule = () => {
        this.Schedule = [];
        if (this.validateData()) {
            this.Schedule.push(
                {
                    personId: this.props.userId,
                    date: this.state.date,
                    from: this.state.from1,
                    to: this.state.to1,
                    workFromHome: this.state.workFromHome1
                },
            );

            this.Schedule.push(
                {
                    personId: this.props.userId,
                    date: this.state.date,
                    from: this.state.from2,
                    to: this.state.to2,
                    workFromHome: this.state.workFromHome2
                }
            );

            this.Schedule.push(
                {
                    personId: this.props.userId,
                    date: this.state.date,
                    from: this.state.from3,
                    to: this.state.to3,
                    workFromHome: this.state.workFromHome3
                }
            );
            this.saveData(this.postScheduleData());
        }
    };

    scheduleSetSuccessful = (response) => {
        this.props.stateUpdater({
            currentPage: (<Navigation userEssentialData={response.data} stateUpdater={this.props.stateUpdater}/>)
        })
    };

    saveData = (workTime) => {
        const url = 'http://localhost:8090/personalSchedule';
        axios({
            method: 'post',
            url: url,
            data: workTime
        })
            .then(response => this.scheduleSetSuccessful(response))
            .catch(err => console.log(err.response))
    };

    postScheduleData = () => {
        return {
            workTimeLists: this.Schedule
        }
    };

    updateWorkDate = (e) => {
        this.setState({date: e.target.value});
    };

    updateWorkStart1 = (e) => {
        this.setState({from1: e.target.value});
    };

    updateWorkEnd1 = (e) => {
        this.setState({to1: e.target.value});
    };

    updateWorkingFromHome1 = (e) => {
        this.setState({workFromHome1: e.target.checked});
    };

    updateWorkStart2 = (e) => {
        this.setState({from2: e.target.value});
    };

    updateWorkEnd2 = (e) => {
        this.setState({to2: e.target.value});
    };

    updateWorkingFromHome2 = (e) => {
        this.setState({workFromHome2: e.target.checked});
    };

    updateWorkStart3 = (e) => {
        this.setState({from3: e.target.value});
    };

    updateWorkEnd3 = (e) => {
        this.setState({to3: e.target.value});
    };

    updateWorkingFromHome3 = (e) => {
        this.setState({workFromHome3: e.target.checked});
    };
}

export default PersonalSchedule;