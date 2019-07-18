import React, {Component} from 'react';
import SearchBar from '../widgets/search-bar';
import NavigationBar from '../navigation';

class Homepage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="content-wrapper">
                <SearchBar placeholder="搜索餐厅或类型"/>
                <NavigationBar/>
            </div>
        );
    }
}

export default Homepage;
