import React from 'react';
import './AssignBar.scss';
import User from "./User";

class AssignBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Users: null
        };
        this.User = [];
    }

    componentDidMount() {
        this.UserList();
    }

    render() {
        return (
            <div>
                <div className="AssignWrap">
                    <div className={"o-MiniSearchBar"}>
                        <input onChange={this.showSearchResults} className={"AssignSearchbar"} placeholder={'Search for user'}/>
                        <img src={require("../Assets/search.svg")} alt={"search"}/>
                    </div>
                    <div className={'AssignMagic'}>
                        {this.User}
                    </div>
                </div>
            </div>
        );
    };

    UserList = () => {
        for (let j = 0; j < 20; j++) {
            this.User.push(
                (
                    <User clickHandler={this.Assign.bind(this)} name={'users'} isRemovable={false}/>
                )
            );
        }

    };

    showSearchResults = () => {
      this.forceUpdate()
    };

    Assign = (id) => {
      this.props.assignedUser(id);
    };
}

export default AssignBar;