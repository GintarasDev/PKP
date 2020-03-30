import React from 'react';
import './SearchBar.scss';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <div className={"o-SearchbarWrap"} >
                <input id={this.props.id} onChange={this.props.onChange} className={"o-Searchbar " + this.props.class}
                       type={this.props.type} placeholder={this.props.placeholder} style={{width: this.props.width}}/>
                <img src={require("../Assets/search.svg")} alt={"search"}/>
            </div>
        );
    }
}

export default SearchBar;
