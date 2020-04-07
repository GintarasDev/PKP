import React from 'react';
import './Styles/Boards.scss';
import PreviewPanel from "../Basics/PreviewPanel";

class AllBoards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToDisplay: null
        };
        this.data = [];
    }

    render() {
        return (
            <div className="o-AllBoards">
                <div className="o-AllBoardsMargin" style={{height: this.props.height}}>
                    {this.state.dataToDisplay}
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.loadBoards();
    }

    loadBoards = () => {
        //connect to api here :)
        this.boardsData = [
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}],
            [{title: "Number of members", value: "14"}, {title: "Number of members", value: "17"}, {title: "Number of members", value: "20"}, {title: "Number of members", value: "15"}]
        ];
        this.boardsData.forEach(element => this.prepareData(element));
        this.setState({dataToDisplay: this.data});
    };

    prepareData = (data) => {
        this.data.push(
            (<PreviewPanel clickHandler={this.openBoard.bind(this)} class={"previewPanel"} width={"20rem"} height={"20rem"} title={"Project X"} dataToDisplay={data}/>)
        );
    };

    openBoard = () => {
        //open board logic goes here :)
        console.log("project clicked");
    }
}


export default AllBoards;
