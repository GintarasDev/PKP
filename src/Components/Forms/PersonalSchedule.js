import React from 'react';
import '../Basics/Button.scss';
import './Styles/PersonalSchedule.scss';
import InputField from "../Basics/InputField";
import PreviewPanel from "../Basics/PreviewPanel";
import ScheduleForm from "./Schedule";

class PersonalSchedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            workSchedule: null,
            startDate: "",
            endDate: "",
            break0: "- 2h 10m break",
            break1: "- 30m break",
        };
        this.Schedule = [];
    }

    render() {
        return (
            <div className={'o-PersonalScheduleContainer'}>
                <div className={'o-PersonalScheduleTitle'} >Set work schedule</div>
                <InputField class={"o-WorkTimeDate"} type={"date"} width={"16rem"}/>
                <div className={"o-WorkTimeRow"}>
                    <span>1.</span>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInputCheckbox"} title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                    <span  className={"o-WorkTimeBreak"}>{this.state.break0}</span>
                </div>
                <div className={"o-WorkTimeRow"}>
                    <span>2.</span>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInputCheckbox"} title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                    <span  className={"o-WorkTimeBreak"}>{this.state.break1}</span>
                </div>
                <div className={"o-WorkTimeRow"}>
                    <span>3.</span>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInput"} type={"time"} width={"16rem"}/>
                    <InputField class={"o-WorkTimeInputCheckbox"} title={"Working from home"} type={"checkbox"} width={"2rem"}/>
                </div>
                <div className={"o-ScheduleForm"}>
                    <ScheduleForm scheduleContainerClass={"o-ScheduleContainerB"}/>
                </div>
            </div>
        );
    }

}

export default PersonalSchedule;