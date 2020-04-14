import React from 'react';
import './Styles/Navigation.scss';
import Logo from "../Basics/Logo";
import ListItem from "../Basics/ListItem";
import SearchBar from "../Basics/SearchBar";
import AllBoards from "./Boards";
import Board from "./Board";
import AllGroups from "./Groups";
import ProfileForm from "./Profile";
import BoardCreation from "./BoardCreation";
import GroupCreation from "./GroupCreation";
import PersonalSchedule from "./PersonalSchedule";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.homePage = true;
        this.state = {
            activeListItemId: 1,
            activeListItem: "",
            activeUser: this.props.userEssentialData.name + " " + this.props.userEssentialData.surname,
            error: null,
            activeUserId: this.props.userEssentialData.id
        }
    }

    render() {
        return (
            <div className="o-NavigationWrap">
                <div className={"top-nav"}>
                    <Logo class={"logo"} width={"4rem"} height={"4rem"}/>
                    <span onClick={this.openProfile} className={"activeUser"}>{this.state.activeUser}</span>
                    <div className={"searchbar-wrap"}>
                        <SearchBar placeholder={"Search for boards, groups and users..."} clickHandler={this.setActive.bind(this)} />
                    </div>
                </div>
                <div className={"side-nav"} >
                    <ListItem isTitle={true} active={false} iconPath={"boards.svg"} text={"Boards"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={0} component={<AllBoards clickHandler={this.setActive.bind(this)}/>} class={"list-item"} active={this.state.activeListItemId === 0} iconPath={"all_boards.svg"} text={"All"} width={"10rem"} height={"2rem"} clickHandler={this.setActive.bind(this)} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={1} component={<Board boardId={/*todo: this.user.personalBoardId*/this.state.personalBoardId} boardIsPersonal={true} assignedUsers={"1 (personal)"} boardTitle={"Personal"} clickHandler={this.setActive.bind(this)}/>} class={"list-item"} active={this.state.activeListItemId === 1} iconPath={"personal.svg"} text={"Personal"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={2} component={<BoardCreation/>} class={"list-item"} active={this.state.activeListItemId === 2} iconPath={"new.svg"} text={"New"} width={"10rem"} height={"2rem"} />
                    <ListItem isTitle={true} active={false} iconPath={"group.svg"} text={"Groups"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={3} component={<AllGroups clickHandler={this.setActive.bind(this)}/>} class={"list-item"} active={this.state.activeListItemId === 3} iconPath={"all_boards.svg"} text={"All"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={4} component={<GroupCreation userId={this.state.activeUserId} clickHandler={this.setActive.bind(this)} />} class={"list-item"} active={this.state.activeListItemId === 4} iconPath={"add_group.svg"} text={"New"} width={"10rem"} height={"2rem"} />
                    <ListItem isTitle={true} active={false} iconPath={"schedule.svg"} text={"Schedule"} width={"15rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={5} component={<PersonalSchedule userId={this.state.activeUserId} />} class={"list-item"} active={this.state.activeListItemId === 5} iconPath={"schedule.svg"} text={"Schedule"} width={"10rem"} height={"2rem"} />
                </div>
                <div className={"currentItemSpace"}>
                    {this.homePage ? (<Board boardId={/*todo: this.user.personalBoardId*/this.state.personalBoardId} boardIsPersonal={true} assignedUsers={"1 (personal)"} boardTitle={"Personal"} clickHandler={this.setActive.bind(this)}/>)
                    : this.state.activeListItem}
                </div>
                {this.state.error}
            </div>
        );
    }

    setActive(id, component) {
        this.homePage = false;
        this.setState({activeListItemId: id, activeListItem: component});
    }

    openProfile = () => {
        console.log("open profile");
        this.setActive(9, (<ProfileForm userId={this.state.activeUserId} stateUpdater={this.props.stateUpdater} clickHandler={this.setActive.bind(this)} />));
    }
}


export default Navigation;
