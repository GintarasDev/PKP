import React from 'react';
import '../Basics/Button.scss';
import './Styles/Schedule.scss';
import InputField from "../Basics/InputField";
import PreviewPanel from "../Basics/PreviewPanel";
import axios from "axios";
import Button from "../Basics/Button";

class ScheduleForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            workSchedule: null,
            startDate: null,
            endDate: null
        };
        this.Schedule = [];
    }

    render() {
        return (
            <div className={'o-ScheduleContainer'}>
                <label className={'o-ScheduleTitle'}
                       style={{display: this.props.useTitle ? "block" : "none"}}>{this.state.name} work schedule</label>
                <label className={'o-ScheduleRangeText'}>Schedule range</label>
                <InputField class={'o-ScheduleRange'} onChangeFrom={this.updateStartDate}
                            onChangeTo={this.updateEndDate} type={'date-range'} width={'15rem'}/>
                <Button class={'o-ScheduleRange'} clickHandler={this.searchForSchedule} text={'search'} width={'8rem'}/>
                <div className={'o-ScheduleBoards ' + this.props.scheduleContainerClass}>
                    {this.state.workSchedule}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.fetchInfo();
    };

    fetchInfo() {
        this.setState({
            name: "Alexandr Misspot"
        });
    };

    searchForSchedule = () => {
        this.getScheduleData();
        this.setState({workSchedule: this.Schedule});
        this.forceUpdate();
    };

    prepareData = (Schedule, k) => {
        this.Schedule.push(
            (<PreviewPanel class={"previewPanel"} width={"20rem"} height={"10rem"} title={this.dates[k]}
                           dataToDisplay={Schedule}/>)
        );
    };

    updateStartDate = (e) => {
        this.setState({startDate: e.target.value});
    };

    updateEndDate = (e) => {
        this.setState({endDate: e.target.value});
    };

    getScheduleData = () => {
        axios.get
        ('http://localhost:8090/Schedule',
            {
                params: {
                    id: this.props.userId,
                    dateFrom: this.state.startDate,
                    dateTo: this.state.endDate
                }
            })
            .then(response => this.MyData(response))
            .catch(err => console.log(err.response))
    };

    MyData = (response) => {
        console.log(response.data);
        this.dates = [];
        this.boardsData = [];
        let i;
        for (i = 0; i < response.data.length; i++) {
            this.dates.push(response.data[i].date);
            if (response.data[i].workFromHome === false) {
                this.boardsData.push([{value: "working from " + response.data[i].from + " till " + response.data[i].to}]);
            } else this.boardsData.push([{value: "WFH from " + response.data[i].from + " till " + response.data[i].to}]);
        }
        let k = 0;
        this.boardsData.forEach(element => this.prepareData(element, k++));
        this.setState({workSchedule: this.Schedule});
    };

}

export default ScheduleForm;