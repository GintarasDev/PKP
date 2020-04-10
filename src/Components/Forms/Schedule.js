import React from 'react';
import '../Basics/Button.scss';
import './Styles/Schedule.scss';
import InputField from "../Basics/InputField";
import PreviewPanel from "../Basics/PreviewPanel";

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            workSchedule: null,
            startDate: "",
            endDate: "",
        };
        this.Schedule = [];
    }

    render() {
        return (
            <div className={'o-ScheduleContainer'}>
                <label className={'o-ScheduleTitle'} style={{display: this.props.useTitle ? "block" : "none"}} >{this.state.name} work schedule</label>
                <label className={'o-ScheduleRangeText'}>Schedule range</label>
                <InputField class={'o-ScheduleRange'} onChangeFrom={this.state.updateStartDate} onChangeTo={this.state.updateEndDate} type={'date-range'} width={'10rem'}/>
                <div className={'o-ScheduleBoards ' + this.props.scheduleContainerClass}>
                    {this.state.workSchedule}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchInfo();
        this.loadBoards();
    };

    fetchInfo(){
        this.setState({
            name: "Alexandr Misspot"
        });
    };

    loadBoards = () => {
        //connect to api here :)
        this.boardsData = [
            [{value: "Working from 8:00 till 11:40"}, {value: "Break from 11:40 till 14:20"}, {value: "WFH from 14:20 till 16:00"}, {value: "Break from 16:00 till 18:30"}, {value: "WFH from 18:30 till 20:00"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{value: "Working from 8:00 till 11:40"}, {value: "Break from 11:40 till 14:20"}, {value: "WFH from 14:20 till 16:00"}, {value: "Break from 16:00 till 18:30"}, {value: "WFH from 18:30 till 20:00"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "2020-03-09", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
        ];
        this.boardsData.forEach(element => this.prepareData(element));
        this.setState({workSchedule: this.Schedule});
    };

    prepareData = (Schedule) => {
        this.Schedule.push(
            (<PreviewPanel class={"previewPanel"} width={"20rem"} height={"10rem"} title={"2020"} dataToDisplay={Schedule}/>)
        );
    };

    updateStartDate = (e) => {
        this.setState({startDate: e.target.value});
    };

    updateEndDate = (e) => {
        this.setState({endDate: e.target.value});
    };

}

export default ScheduleForm;