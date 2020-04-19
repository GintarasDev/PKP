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
        this.checkMenuState = this.checkMenuState.bind(this);
        this.homePage = true;
        this.state = {
            activeListItemId: 1,
            activeListItem: "",
            activeUser: this.props.userEssentialData.name + " " + this.props.userEssentialData.surname,
            error: null,
            activeUserId: this.props.userEssentialData.id,
            menuIsOpen: false,
            displayMenuButton: false
        };
    }

    checkMenuState = () => {
        if (window.innerWidth <= 1000) {
            if (!this.state.displayMenuButton) {
                this.setState({
                    displayMenuButton: true,
                    menuIsOpen: false
                });
                console.log("true")
            }
        }
        if (window.innerWidth > 1000) {
            if (this.state.displayMenuButton) {
                this.setState({
                    displayMenuButton: false
                });
                console.log("false")
            }
        }
    };

    render() {
        return (
            <div className="o-NavigationWrap">
                <div className={"searchbar-wrap"}>
                    <SearchBar placeholder={"Search for boards, groups and users..."}
                               clickHandler={this.setActive.bind(this)}/>
                </div>
                <div className={"currentItemSpace"}>
                    {this.homePage ? (<Board userId={this.state.activeUserId}
                                             boardId={/*todo: this.user.personalBoardId*/this.state.personalBoardId}
                                             boardIsPersonal={true} assignedUsers={"1 (personal)"}
                                             boardTitle={"Personal"} clickHandler={this.setActive.bind(this)}/>)
                        : this.state.activeListItem}
                </div>
                {this.state.error}
                <div className={"side-nav"}>
                    <div className={"o-LogoAndUser"}>
                        <Logo class={"logo"} width={"4rem"} height={"4rem"}/>
                        <span onClick={this.openProfile} className={"activeUser"}>{this.state.activeUser}</span>
                    </div>
                    {this.state.displayMenuButton ?
                        <div className={"o-MenuButton"}>
                            <img onClick={this.openCloseMenu.bind(this)}
                                 style={{width: "3rem", height: "3rem"}}
                                 src={require("../Assets/menu.svg")} alt={"expand menu"}/>
                        </div>
                        : ""}
                    {this.state.displayMenuButton ? (this.state.menuIsOpen ?
                        this.getMenu() : "") :
                        this.getMenu()
                    }
                </div>
            </div>
        );
    }

    componentDidMount() {
        window.addEventListener('resize', this.checkMenuState);
        this.checkMenuState();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.checkMenuState);
    }

    openCloseMenu = () => {
        console.log("clicked menu");
        this.setState({
            menuIsOpen: !this.state.menuIsOpen
        })
    };

    getMenu = () => {
        return (
            <div itemID={"navBarHidden"}
                 style={this.state.displayMenuButton ? {zIndex: 200, background: "rgba(0,0,0,1)"} : {}}>
                <ListItem isTitle={true} active={false} iconPath={"boards.svg"} text={"Boards"} width={"10rem"}
                          height={"2rem"}/>
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={0}
                          component={<AllBoards userId={this.state.activeUserId}
                                                clickHandler={this.setActive.bind(this)}/>} class={"list-item"}
                          active={this.state.activeListItemId === 0} iconPath={"all_boards.svg"} text={"All"}
                          width={"10rem"} height={"2rem"} />
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={1}
                          component={<Board userId={this.state.activeUserId} boardIsPersonal={true}
                                            clickHandler={this.setActive.bind(this)}/>} class={"list-item"}
                          active={this.state.activeListItemId === 1} iconPath={"personal.svg"} text={"Personal"}
                          width={"10rem"} height={"2rem"}/>
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={2}
                          component={<BoardCreation userId={this.state.activeUserId}
                                                    stateUpdater={this.setActive.bind(this)}/>}
                          class={"list-item"}
                          active={this.state.activeListItemId === 2} iconPath={"new.svg"} text={"New"}
                          width={"10rem"} height={"2rem"}/>
                <ListItem isTitle={true} active={false} iconPath={"group.svg"} text={"Groups"} width={"10rem"}
                          height={"2rem"}/>
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={3}
                          component={<AllGroups clickHandler={this.setActive.bind(this)}/>} class={"list-item"}
                          active={this.state.activeListItemId === 3} iconPath={"all_boards.svg"} text={"All"}
                          width={"10rem"} height={"2rem"}/>
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={4}
                          component={<GroupCreation userId={this.state.activeUserId}
                                                    clickHandler={this.setActive.bind(this)}/>}
                          class={"list-item"}
                          active={this.state.activeListItemId === 4} iconPath={"add_group.svg"} text={"New"}
                          width={"10rem"} height={"2rem"}/>
                <ListItem isTitle={true} active={false} iconPath={"schedule.svg"} text={"Schedule"}
                          width={"15rem"}
                          height={"2rem"}/>
                <ListItem clickHandler={this.setActive.bind(this)} itemNo={5}
                          component={<PersonalSchedule userId={this.state.activeUserId}/>} class={"list-item"}
                          active={this.state.activeListItemId === 5} iconPath={"schedule.svg"} text={"Schedule"}
                          width={"10rem"} height={"2rem"}/>
            </div>
        );
    };

    setActive(id, component) {
        this.homePage = false;
        this.setState({activeListItemId: id, activeListItem: component});
    }

    openProfile = () => {
        console.log("open profile");
        this.setActive(9, (<ProfileForm userId={this.state.activeUserId} stateUpdater={this.props.stateUpdater}
                                        clickHandler={this.setActive.bind(this)}/>));
    }
}


export default Navigation;
