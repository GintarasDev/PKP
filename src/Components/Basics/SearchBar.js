import React from 'react';
import './SearchBar.scss';
import SearchResults from "../Forms/SearchResults";

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
                <input id={this.props.id} onChange={this.showSearchResults} className={"o-Searchbar " + this.props.class}
                       type={this.props.type} placeholder={this.props.placeholder} style={{width: this.props.width}}/>
                <img src={require("../Assets/search.svg")} alt={"search"}/>
            </div>
        );
    }

    showSearchResults = () => {
        this.props.clickHandler(9, <SearchResults searchString={this.state.value} clickHandler={this.props.clickHandler} />)
    }
}

export default SearchBar;
