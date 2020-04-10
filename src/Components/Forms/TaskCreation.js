import React from 'react';
import './Styles/TaskCreation.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";

class TaskCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={'taskCreationContainer'}>
                <div>
                    <BoardTemplate type={'task'} value={'Task creation'}/>
                </div>
                <div className={'taskCreationAdjust'}>
                    <Button width={'10rem'} text={'Create'}/>
                </div>
            </div>
        );
    };

}

export default TaskCreation;