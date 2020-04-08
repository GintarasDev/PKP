import React from 'react';
import '../Basics/Button.scss';
import './Styles/Schedule.scss';
import InputField from "../Basics/InputField";

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
                <InputField type={'date'} width={'14rem'} />
                <InputField type={'date-range'} width={'30rem'} />
                <InputField type={'time'} width={'14rem'} />
                <InputField title={'Test'} type={'checkbox'} />
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