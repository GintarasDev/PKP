import React from 'react';
import '../Basics/Button.scss';
import './Styles/Schedule.scss';
import InputField from "../Basics/InputField";
import 'react-day-picker/lib/style.css';

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            workSchedule: "",

        };
    }

    render() {
        return (
            <div className={'scheduleContainer'}>
                <label className={'scheduleText'} >{this.state.name} work schedule</label>
                <div className={'schedulePad'}>
                    <label className={'scheduleText'}>Schedule</label>
                </div>
                <div className={'scheduleMargin'}>
                    <InputField class={'scheduleInline'} type={'date'} width={'11rem'}/>
                    <span className={'scheduleSpan'}>-</span>
                    <InputField class={'scheduleInline'} type={'date'} width={'11rem'}/>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchInfo();
    }

    fetchInfo(){
        this.setState({
            name: "Alexandr Misspot"
        });
    };

}

export default ScheduleForm;