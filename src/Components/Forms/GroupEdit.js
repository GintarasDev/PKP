import React from 'react';
import './Styles/GroupEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";

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
                    <BoardTemplate value={'Group editing'}/>
                </div>
                <div className={'groupEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete group'}/>
                    <Button width={'13rem'} text={'Save changes'} />
                    <Button color={'orange'} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'group'} call={'this group?'} clickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };
}

export default GroupEdit;