import React, {Component} from 'react';
import SearchBar from '../widgets/search-bar';
import NavigationBar from '../navigation';

export default () => {
    return (
        <div className="content-wrapper">
            <SearchBar placeholder="Search resturant or type" />
            <NavigationBar />
        </div>
    );
}
