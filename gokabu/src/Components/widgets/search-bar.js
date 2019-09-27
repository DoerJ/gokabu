import React, {Component} from 'react';
import '../../Styles/widgets/search-bar.css';

export default (props) => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-block">
                <input type="text" placeholder={props.placeholder}/>
            </div>
        </div>
    );
}
