import React from 'react';
import './Styles/TaskEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";

class TaskEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null
        }
    };

    render() {
        return (
            <div className={'taskEditContainer'}>
                <div>
                    <BoardTemplate type={'task'} value={'Task editing'}/>
                </div>
                <div className={'taskEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete task'}/>
                    <Button width={'13rem'} text={'Save changes'} />
                    <Button color={'orange'} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'task'} call={'this task?'} clickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };
}

export default TaskEdit;