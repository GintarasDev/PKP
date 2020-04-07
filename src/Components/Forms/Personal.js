import React from 'react';
import './Styles/Personal.scss';
import PreviewPanel from "../Basics/PreviewPanel";
import TaskPreview from "../Basics/TaskPreview";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.temp = [];
        this.backlogTasks = [];
        this.toDoTasks = [];
        this.inProgressTasks = [];
        this.onHoldTasks = [];
        this.doneTasks = [];
        this.addTasksToBoard();
        this.state = {
            backlogTasks: this.backlogTasks,
            toDoTasks: this.toDoTasks,
            inProgressTasks: this.inProgressTasks,
            onHoldTasks: this.onHoldTasks,
            doneTasks: this.doneTasks
        }
    };

    render() {
        return (
            <div className="o-PersonalBoard">
                <div className="o-Boards">
                    <PreviewPanel class={"taskPanel"} title={"Backlog"} height={"40rem"} width={"16rem"} additionalElement={this.addTaskButton()} additionalElementHeight={"1.2rem"} dataToDisplay={this.state.backlogTasks} />
                    <PreviewPanel class={"taskPanel"} title={"To do"} height={"40rem"} width={"16rem"} additionalElement={this.addTaskButton()} additionalElementHeight={"1.2rem"} dataToDisplay={this.state.toDoTasks} />
                    <PreviewPanel class={"taskPanel"} title={"In progress"} height={"40rem"} width={"16rem"} additionalElement={this.addTaskButton()} additionalElementHeight={"1.2rem"} dataToDisplay={this.state.inProgressTasks} />
                    <PreviewPanel class={"taskPanel"} title={"On hold"} height={"40rem"} width={"16rem"} additionalElement={this.addTaskButton()} additionalElementHeight={"1.2rem"} dataToDisplay={this.state.onHoldTasks} />
                    <PreviewPanel class={"taskPanel"} title={"Done"} height={"40rem"} width={"16rem"} additionalElement={this.addTaskButton()} additionalElementHeight={"1.2rem"} dataToDisplay={this.state.doneTasks} />
                </div>
            </div>
        );
    };

    addTasksToBoard = () => {
        //connect to api here :)
        this.backlogTasks = [
            {id: "0", value: (<TaskPreview id={"0"} board="backlog" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "1", value: (<TaskPreview id={"1"} board="backlog" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "2", value: (<TaskPreview id={"2"} board="backlog" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "3", value: (<TaskPreview id={"3"} board="backlog" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "4", value: (<TaskPreview id={"4"} board="backlog" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
          ];
        this.toDoTasks = [
            {id: "5", value: (<TaskPreview id={"5"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "6", value: (<TaskPreview id={"6"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "7", value: (<TaskPreview id={"7"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "8", value: (<TaskPreview id={"8"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "9", value: (<TaskPreview id={"9"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "10", value: (<TaskPreview id={"10"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "11", value: (<TaskPreview id={"11"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "12", value: (<TaskPreview id={"12"} board="todo" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)}
        ];
        this.inProgressTasks = [
            {id: "13", value: (<TaskPreview id={"13"} board="inprogress" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "14", value: (<TaskPreview id={"14"} board="inprogress" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "15", value: (<TaskPreview id={"15"} board="inprogress" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "16", value: (<TaskPreview id={"16"} board="inprogress" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            ];
        this.onHoldTasks = [];
        this.doneTasks = [
            {id: "17", value: (<TaskPreview id={"17"} board="done" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)},
            {id: "18", value: (<TaskPreview id={"18"} board="done" width={"14rem"} title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"} taskCreator={"Tomas Petrikevich"} dropFunction={this.removeTaskFromBoard.bind(this)} />)}
        ];
    };

    addTaskButton = () => {
        return (
          <div className="o-AddTask">
              <img src={require("../Assets/new.svg")} style={{width: "3rem", height: "3rem"}} alt={"Create new task"}/>
          </div>
        );
    };

    removeTaskFromBoard = (id, boardTitle) => {
        this.temp = [];
        if (boardTitle === "backlog") {
            this.removeTask(id, this.state.backlogTasks);
            if(this.temp === this.state.backlogTasks){
                console.log("wtf");
            }
            this.setState({backlogTasks: this.temp});
        }
        else if (boardTitle === "todo") {
            this.removeTask(id, this.state.toDoTasks);
            this.setState({toDoTasks: this.temp});
        }
        else if (boardTitle === "inprogress") {
            this.removeTask(id, this.state.inProgressTasks);
            this.setState({inProgressTasks: this.temp});
        }
        else if (boardTitle === "onhold") {
            this.removeTask(id, this.state.onHoldTasks);
            this.setState({onHoldTasks: this.temp});
        }
        else if (boardTitle === "done") {
            this.removeTask(id, this.state.doneTasks);
            this.setState({doneTasks: this.temp});
        }
    };

    removeTask = (id, board) => {
        board.forEach(element => this.checkElement(element, id));
    };

    checkElement = (element, id) => {
        if(element.id !== id) {
            this.temp.push(element);
        }
    };
}

export default Board;
