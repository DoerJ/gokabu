import React, {Component} from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import Homepage from '../Components/homepage';

class Routes extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <HashRouter>
                <Route exact path="/home/:nav" component={Homepage}/>
            </HashRouter>
        );
    }
}

export default Routes;
