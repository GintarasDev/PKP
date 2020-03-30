import React from 'react';
import './App.css';
import LoginForm from "./Components/Forms/Login";
import Navigation from "./Components/Forms/Navigation";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: (<LoginForm stateUpdater={this.updateAppState}/>)//,
            //logedIn: false
        }
    }

    updateAppState = (state) => {
        this.setState(state);
    };

    render() {
        //{this.state.currentPage}
        //<SignupForm stateUpdater={this.updateAppState} />
        return (
            <div className="App">
                <Navigation stateUpdater={this.updateAppState} />
            </div>
        );
    };
}

export default App;
