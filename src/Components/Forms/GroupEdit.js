import React from 'react';
import './Styles/GroupEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";
import Group from "./Group";
import AllGroups from "./Groups";

class GroupEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null
        }
    };

    render() {
        return (
            <div className={'groupEditContainer'}>
                <div>
                    <BoardTemplate value={'Group editing'}  titlePlaceholder={"Group title"} descriptionPlaceholder={"Group description"} />
                </div>
                <div className={'groupEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete group'}/>
                    <Button clickHandler={this.saveChanges} width={'13rem'} text={'Save changes'} />
                    <Button clickHandler={this.cancelChanges} color={'orange'} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'group'} call={'this group?'} deleteClickHandler={this.deleteGroup} cancelClickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };

    deleteGroup = () => {
        //delete group logic here
        this.props.returnHandler(9, <AllGroups clickHandler={this.props.returnHandler}/>)
    };

    cancelChanges = () => {
        //cancel changes logic here
        this.props.returnHandler(9, <Group clickHandler={this.props.returnHandler} />)
    };

    saveChanges = () => {
        //save changes logic here
        this.props.returnHandler(9, <Group clickHandler={this.props.returnHandler} />)
    };
}

export default GroupEdit;