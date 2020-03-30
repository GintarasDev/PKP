import React from 'react';
import './Styles/Navigation.scss';
// import InputField from "../Basics/InputField";
// import Button from "../Basics/Button";
import Logo from "../Basics/Logo";
import ListItem from "../Basics/ListItem";
import SearchBar from "../Basics/SearchBar";
import ProfileForm from "../Forms/Profile";

class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeListItemId: 0,
            activeListItem: <ProfileForm>yes</ProfileForm>,
            activeUser: "Tomas Lomas"
        }
    }
    render() {
        return (
            <div className="o-NavigationWrap">
                <div className={"top-nav"}>
                    <Logo class={"logo"} width={"4rem"} height={"4rem"}/>
                    <span className={"activeUser"}>{this.state.activeUser}</span>
                    <div className={"searchbar-wrap"}>
                        <SearchBar placeholder={"Search for boards, groups and users..."} />
                    </div>
                </div>
                <div className={"side-nav"} >
                    <ListItem isTitle={true} active={false} iconPath={"boards.svg"} text={"Boards"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={0} component={<div>placeholder 0</div>} class={"list-item"} active={this.state.activeListItemId === 0} iconPath={"all_boards.svg"} text={"All"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={1} component={<div>placeholder 1</div>} class={"list-item"} active={this.state.activeListItemId === 1} iconPath={"personal.svg"} text={"Personal"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={2} component={<div>placeholder 2</div>} class={"list-item"} active={this.state.activeListItemId === 2} iconPath={"new.svg"} text={"New"} width={"10rem"} height={"2rem"} />
                    <ListItem isTitle={true} active={false} iconPath={"group.svg"} text={"Groups"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={3} component={<div>placeholder 3</div>} class={"list-item"} active={this.state.activeListItemId === 3} iconPath={"all_boards.svg"} text={"All"} width={"10rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={4} component={<div>placeholder 4</div>} class={"list-item"} active={this.state.activeListItemId === 4} iconPath={"add_group.svg"} text={"New"} width={"10rem"} height={"2rem"} />
                    <ListItem isTitle={true} active={false} iconPath={"schedule.svg"} text={"Schedule"} width={"15rem"} height={"2rem"} />
                    <ListItem clickHandler={this.setActive.bind(this)} itemNo={5} component={<div>placeholder 5</div>} class={"list-item"} active={this.state.activeListItemId === 5} iconPath={"schedule.svg"} text={"Schedule"} width={"10rem"} height={"2rem"} />
                </div>
                <div className={"currentItemSpace"}>
                    {this.state.activeListItem}
                </div>
            </div>
        );
    }

    setActive(id, component) {
        this.setState({activeListItemId: id, activeListItem: component});
    }

    updatePassword = (e) => {
        this.setState({password: e.target.value});
    };

    logIn = () => {
        console.log("Congrats, you've just loged in: " + this.state.username + " - " + this.state.password);
    }
}


export default Navigation;
