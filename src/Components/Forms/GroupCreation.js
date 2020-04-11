import React from 'react';
import './Styles/GroupCreation.scss';
import BoardTemplate from "../Basics/BoardTemplate";
import Button from "../Basics/Button";

class GroupCreation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };

    render() {
        return (
            <div className={'groupCreationContainer'}>
                <div>
                    <BoardTemplate value={'Group creation'} titlePlaceholder={"Group title"} descriptionPlaceholder={"Group description"} />
                </div>
                <div className={'groupCreationAdjust'}>
                    <Button width={'10rem'} text={'Create'}/>
                </div>
            </div>
        );
    };

}

export default GroupCreation;