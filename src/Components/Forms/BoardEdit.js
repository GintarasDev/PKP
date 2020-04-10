import React from 'react';
import './Styles/BoardEdit.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";
import DeleteProfile from "../Basics/DeleteProfile";

class BoardEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            popUp: null
        }
    };

    render() {
        return (
            <div className={'boardEditContainer'}>
                <div>
                    <BoardTemplate value={'Board editing'}/>
                </div>
                <div className={'boardEditButtonBox'}>
                    <Button color={'red'} clickHandler={this.popUp} width={'12rem'} text={'Delete board'}/>
                    <Button width={'13rem'} text={'Save changes'} />
                    <Button color={'orange'} width={'14rem'} text={'Cancel changes'}/>
                </div>
                {this.state.popUp}
            </div>
        );
    };

    popUp = () => {
        this.setState({popUp: (<DeleteProfile dynamic={'board'} call={'this board?'} clickHandler={this.removeMessage} width={"20rem"}/>)});
    };

    removeMessage = () => {
        this.setState({popUp: null});
    };
}

export default BoardEdit;