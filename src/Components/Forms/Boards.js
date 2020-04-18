import React from 'react';
import './Styles/Boards.scss';
import PreviewPanel from "../Basics/PreviewPanel";
import Board from "./Board";
import axios from "axios";
import PopUpError from "../Basics/PopUpError";

class AllBoards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToDisplay: null,
            error: null,
            activeUserId: this.props.userId
        };
        this.data = [];
    }

    render() {
        return (
            <div className="o-AllBoards">
                <div className="o-AllBoardsMargin">
                    {this.state.dataToDisplay}
                </div>
                {this.state.error}
            </div>
        );
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        const url = 'http://localhost:8090/AllUserBoards';
        axios.get(url, {params: {id: this.props.userId}})
            .then(response => this.loadBoards(response))
            .catch(err => console.log(err))
    };

    loadBoards = (response) => {
        if(response.status === 200) {
            response.data.forEach(element => {
                this.prepareData(
                    [
                        {title: "Number of members", value: element.numberOfMembers},
                        {title: "Description", value: element.description}
                    ],
                    element.title,
                    element.id);
            });
            this.setState({dataToDisplay: this.data});
        }
        else {
            this.setState({error: (<PopUpError message={"Unknown error occurred while trying to load your boards"} clickHandler={this.removeErrorMessage} width={"20rem"}/>)});
        }
    };

    prepareData = (data, title, id) => {
        this.data.push(
            (<PreviewPanel clickHandler={this.openBoard.bind(this)} boardId={id} class={"previewPanel"} width={"20rem"}
                           height={"14rem"} title={title} dataToDisplay={data}/>)
        );
    };

    removeErrorMessage = () => {
        this.setState({error: null});
    };

    openBoard = (id) => {
        console.log("opening: " + id);
        this.props.clickHandler(9, <Board userId={this.state.activeUserId} boardId={id} boardIsPersonal={false} clickHandler={this.props.clickHandler}/>);
        console.log("project clicked");
    }
}


export default AllBoards;
