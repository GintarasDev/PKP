import React from 'react';
import './App.css';
import LoginForm from "./Components/Forms/Login";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: (<LoginForm stateUpdater={this.updateAppState.bind(this)}/>)//,
            //logedIn: false
        }
    }

    updateAppState = (state) => {
        console.log("delete profile: " + state.currentPage);
        this.setState(state);
    };

    render() {
        return (
            <div className="App">
                {this.state.currentPage}
            </div>
        );
    };
}

export default App;
