import React from 'react';
import './Styles/BoardCreation.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";

class BoardCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={'boardCreationContainer'}>
                <div>
                    <BoardTemplate value={'Boards creation'}/>
                </div>
                <div className={'boardCreationAdjust'}>
                    <Button width={'10rem'} text={'Create'}/>
                </div>
            </div>
        );
    };

}

export default BoardCreation;