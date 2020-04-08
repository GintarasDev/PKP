import React from 'react';
import '../Basics/Button.scss';
import './Styles/Schedule.scss';
import InputField from "../Basics/InputField";
import PreviewPanel from "../Basics/PreviewPanel";
import Board from "./Board";

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
            <div className={'scheduleContainer'}>
                <label>{this.state.name} work schedule</label>
                <div className={'schedulePad'}>
                    <label>Schedule</label>
                </div>
                <div className={'scheduleMargin'}>
                    <InputField class={'scheduleInline'} onChange={this.state.updateStartDate} type={'date'} width={'11rem'}/>
                    <span className={'scheduleSpan'}>-</span>
                    <InputField class={'scheduleInline'} onChange={this.state.updateEndDate} type={'date'} width={'11rem'}/>
                </div>
                <div className={'scheduleBoards'}>
                    <div className="scheduleBoardsMargin" style={{height: this.props.height}}>
                        {this.state.workSchedule}
                    </div>
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

    openBoard = () => {
        //open board logic goes here :)
        this.props.clickHandler(9, <Board boardTitle={"2020-03-09"} assignedUsers={"17"} clickHandler={this.props.clickHandler}/>);
        console.log("project clicked");
    };

    updateStartDate = (e) => {
        this.setState({startDate: e.target.value});
    };

    updateEndDate = (e) => {
        this.setState({endDate: e.target.value});
    };

}

export default ScheduleForm;