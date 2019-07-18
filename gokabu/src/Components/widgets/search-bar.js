import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {searchType: null};
    }

    render() {
        return (
            <div className="search-bar-wrapper">
                <div className="search-bar-block">
                    <input type="text" ref="search-type" placeholder={this.props.placeholder}/>
                </div>
            </div>
        );
    }
}

export default SearchBar;
