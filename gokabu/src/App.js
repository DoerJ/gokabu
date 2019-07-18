import React, {Component} from 'react';
import Routes from './Routes/routes';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="wrapper">
                <Routes/>
            </div>
        );
    }
}

export default App;
