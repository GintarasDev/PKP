import React from 'react';
import './Styles/Board.scss';
import PreviewPanel from "../Basics/PreviewPanel";
import TaskPreview from "../Basics/TaskPreview";
import Button from "../Basics/Button";
import BoardEdit from "./BoardEdit";
import TaskEdit from "./TaskEdit";
import TaskCreation from "./TaskCreation";
import axios from "axios";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.temp = [];

        this.state = {
            backlogTasks: [],
            toDoTasks: [],
            inProgressTasks: [],
            onHoldTasks: [],
            doneTasks: [],
            boardId: this.props.boardId,
            boardTitle: "",
            boardDescription: "",
            numberOfAssignedUsers: "",
            assignedUsers: []
        }
    };

    render() {
        return (
            <div className="o-PersonalBoard">
                <div className={"o-BoardHeader o-Left"}>
                    <img src={require("../Assets/personal.svg")} alt={"Assigned users"}/>
                    {" " + this.state.numberOfAssignedUsers}
                </div>
                <div className={"o-BoardHeader o-Center"}>
                    {this.state.boardTitle}
                </div>
                <div className={"o-BoardHeader o-Right"}>
                    <Button clickHandler={this.editBoard} iconPath={'edit.svg'} width={"12rem"} height={"1.5rem"}
                            text={"Edit board"}/>
                </div>
                <div className="o-Boards">
                    <PreviewPanel class={"taskPanel"} title={"Backlog"} height={"40rem"} width={"16rem"}
                                  additionalElement={this.addTaskButton("BACKLOG")} additionalElementHeight={"1.2rem"}
                                  dataToDisplay={this.state.backlogTasks} addElement={this.addElement.bind(this)}/>
                    <PreviewPanel class={"taskPanel"} title={"To do"} height={"40rem"} width={"16rem"}
                                  additionalElement={this.addTaskButton("TO_DO")} additionalElementHeight={"1.2rem"}
                                  dataToDisplay={this.state.toDoTasks} addElement={this.addElement.bind(this)}/>
                    <PreviewPanel class={"taskPanel"} title={"In progress"} height={"40rem"} width={"16rem"}
                                  additionalElement={this.addTaskButton("IN_PROGRESS")}
                                  additionalElementHeight={"1.2rem"} dataToDisplay={this.state.inProgressTasks}
                                  addElement={this.addElement.bind(this)}/>
                    <PreviewPanel class={"taskPanel"} title={"On hold"} height={"40rem"} width={"16rem"}
                                  additionalElement={this.addTaskButton("ON_HOLD")} additionalElementHeight={"1.2rem"}
                                  dataToDisplay={this.state.onHoldTasks} addElement={this.addElement.bind(this)}/>
                    <PreviewPanel class={"taskPanel"} title={"Done"} height={"40rem"} width={"16rem"}
                                  additionalElement={this.addTaskButton("DONE")} additionalElementHeight={"1.2rem"}
                                  dataToDisplay={this.state.doneTasks} addElement={this.addElement.bind(this)}/>
                </div>
            </div>
        );
    };

    componentDidMount() {
        if (this.props.boardIsPersonal) {
            this.preparePersonalTasks();
        } else {
            this.getData();
        }
    }

    getData = () => {
        const url = 'http://localhost:8090/board';
        axios.get(url, {params: {id: this.props.boardId}})
            .then(response => this.prepareData(response))
            .catch(err => console.log(err.response))
    };

    prepareData = (response) => {
      if (response.status === 200) {
          for(let i=0; i<response.data.taskData.length; i++)
          {this.prepareTask(response.data.taskData[i])}
          this.setState({
              boardTitle: response.data.title,
              boardDescription: response.data.description,
              numberOfAssignedUsers: response.data.assignedUsers.length,
              assignedUsers: response.data.assignedUsers
          });
      } else {
          console.log("error: " + response);
      }
    };

    prepareTask = (data) => {
        this.temp = [];

        if (data.status === "BACKLOG") {
            this.setState({backlogTasks: this.getAway(data, this.state.backlogTasks)});
        }
        else if (data.status === "TO_DO") {
            this.setState({toDoTasks: this.getAway(data, this.state.toDoTasks)});
        }
        else if (data.status === "IN_PROGRESS") {
            this.setState({inProgressTasks: this.getAway(data, this.state.inProgressTasks)});
        }
        else if (data.status === "ON_HOLD") {
            this.setState({onHoldTasks: this.getAway(data, this.state.onHoldTasks)});
        }
        else if (data.status === "DONE") {
            this.setState({doneTasks: this.getAway(data, this.state.doneTasks)});
        }
    };

    getAway = (data, temp) => {
        this.temp = temp;
        this.temp.push({id: data.id, value: (<TaskPreview id={data.id} board={data.status} width={"14rem"} title={data.title} estimatedTime={data.estimatedTime} taskCreator={data.adminUserId} dropFunction={this.removeTaskFromBoard.bind(this)} clickHandler={this.editTask} />)});
        return this.temp;
    };

    editBoard = () => {
        this.props.clickHandler(9, <BoardEdit userId={this.props.userId} boardId={this.props.boardId}
                                              title={this.state.boardTitle} description={this.state.boardDescription}
                                              assignedUsers={this.state.assignedUsers}
                                              boardIsPersonal={this.props.boardIsPersonal}
                                              returnHandler={this.props.clickHandler}/>);
    };

    preparePersonalTasks = () => {
        //connect to api here :)
        let backlogTasks = [];
        let toDoTasks = [];
        let inProgressTasks = [];
        let onHoldTasks = [];
        let doneTasks = [];
        backlogTasks = [
            {id: "0",
                value: (<TaskPreview id={"0"} board="backlog" width={"14rem"}
                                     title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"}
                                     taskCreator={"Tomas Petrikevich"}
                                     dropFunction={this.removeTaskFromBoard.bind(this)} clickHandler={this.editTask}/>)
            },
        ];
        toDoTasks = [
            {id: "5",
                value: (<TaskPreview id={"5"} board="todo" width={"14rem"}
                                     title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"}
                                     taskCreator={"Tomas Petrikevich"}
                                     dropFunction={this.removeTaskFromBoard.bind(this)} clickHandler={this.editTask}/>)
            },
        ];
        inProgressTasks = [
            {id: "13",
                value: (<TaskPreview id={"13"} board="inprogress" width={"14rem"}
                                     title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"}
                                     taskCreator={"Tomas Petrikevich"}
                                     dropFunction={this.removeTaskFromBoard.bind(this)} clickHandler={this.editTask}/>)
            },
        ];
        onHoldTasks = [];
        doneTasks = [
            {id: "17",
                value: (<TaskPreview id={"17"} board="done" width={"14rem"}
                                     title={"Prepare UI UX project for tommy the carrot"} estimatedTime={"3.52"}
                                     taskCreator={"Tomas Petrikevich"}
                                     dropFunction={this.removeTaskFromBoard.bind(this)} clickHandler={this.editTask}/>)
            },
        ];

        this.setState({
            backlogTasks: backlogTasks,
            toDoTasks: toDoTasks,
            inProgressTasks: inProgressTasks,
            onHoldTasks: onHoldTasks,
            doneTasks: doneTasks,
            boardTitle: "Personal board",
            numberOfAssignedUsers: "1 (personal)"
        });
    };

    editTask = (id, component) => {
        console.log(id);
        this.props.clickHandler(9, <TaskEdit userId={this.props.userId} returnHandler={this.props.clickHandler} boardIsPersonal={false} boardId={this.state.boardId} taskId={id}/>);
    };

    createNewTask = (status) => {
        this.props.clickHandler(9, <TaskCreation returnHandler={this.props.clickHandler} boardIsPersonal={false} boardId={this.state.boardId} status={status} userId={this.props.userId} />);
    };

    addTaskButton = (status) => {
        return (
            <div className="o-AddTask" onClick={() => this.createNewTask(status)}>
                <img src={require("../Assets/new.svg")} style={{width: "3rem", height: "3rem"}}
                     alt={"Create new task"}/>
            </div>
        );
    };

    removeTaskFromBoard = (id, boardTitle) => {
        this.temp = [];
        if (boardTitle === "backlog") {
            this.removeTask(id, this.state.backlogTasks);
            this.setState({backlogTasks: this.temp});
        } else if (boardTitle === "todo") {
            this.removeTask(id, this.state.toDoTasks);
            this.setState({toDoTasks: this.temp});
        } else if (boardTitle === "inprogress") {
            this.removeTask(id, this.state.inProgressTasks);
            this.setState({inProgressTasks: this.temp});
        } else if (boardTitle === "onhold") {
            this.removeTask(id, this.state.onHoldTasks);
            this.setState({onHoldTasks: this.temp});
        } else if (boardTitle === "done") {
            this.removeTask(id, this.state.doneTasks);
            this.setState({doneTasks: this.temp});
        }
    };

    removeTask = (id, board) => {
        board.forEach(element => this.checkElement(element, id));
    };

    checkElement = (element, id) => {
        if (element.id !== id) {
            this.temp.push(element);
        } else {
            this.elementToAdd = element;
        }
    };

    addElement = (boardTitle) => {
        this.temp = [];
        //add api for category changing here :)
        if (boardTitle === "Backlog") {
            this.temp = this.state.backlogTasks;
            this.temp.push(this.elementToAdd);
            this.setState({backlogTasks: this.temp});
        } else if (boardTitle === "To do") {
            this.temp = this.state.toDoTasks;
            this.temp.push(this.elementToAdd);
            this.setState({toDoTasks: this.temp});
        } else if (boardTitle === "In progress") {
            this.temp = this.state.inProgressTasks;
            this.temp.push(this.elementToAdd);
            this.setState({inProgressTasks: this.temp});
        } else if (boardTitle === "On hold") {
            this.temp = this.state.onHoldTasks;
            this.temp.push(this.elementToAdd);
            this.setState({onHoldTasks: this.temp});
        } else if (boardTitle === "Done") {
            this.temp = this.state.doneTasks;
            this.temp.push(this.elementToAdd);
            this.setState({doneTasks: this.temp});
        }
    };
}

export default Board;
