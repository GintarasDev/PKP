import React from 'react';
import './AssignBar.scss';
import User from "./User";
import axios from "axios";

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
                        <input onClick={this.showSearchResults} className={"AssignSearchbar"}
                               placeholder={'Search for user'}/>
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
        const url = this.props.isGroups ? 'http://localhost:8090/getAllUsersForGroups' : 'http://localhost:8090/getAllUsers';
        axios.get(url, {crossdomain: true})
            .then(response => {
                    response.data.forEach(element => {
                            this.User.push(
                                <User clickHandler={this.Assign.bind(this)} id={element.id} name={element.name + ' ' + element.surname} isRemovable={false}/>
                            )
                        }
                    )
                }
            )
            .catch(err => console.log(err));
    };

    showSearchResults = () => {
        this.forceUpdate()
    };

    Assign = (id, name) => {
        this.props.assignedUser(id, name);
    };
}

export default AssignBar;