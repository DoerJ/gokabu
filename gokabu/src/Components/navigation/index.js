import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import DefaultList from '../homepage/default-list';
import '../../Styles/navigation.css';

class NavigationBar extends Component {
    constructor(props) {
        super(props);
        this.state={itemClicked: 'nearby-eats'}
    }

    navClickHandler = (e, nav) => {
        this.setState({itemClicked: nav});
        this.props.history.push(`/home/${nav}`);
    }

    render() {
        return (
            <div className="content-wrapper">
                <div className="nav-bar-wrapper">
                    <div className="nav-items-container">
                        <span className="nav-item-container">
                            <a className={(this.state.itemClicked === 'nearby-eats') ? "nav-item-nearby-eats-clicked" : "nav-item-nearby-eats"}
                            onClick={(e) => this.navClickHandler(e, 'nearby-eats')}>附近餐厅</a>
                        </span>
                        <span className="nav-item-container">
                            <a className={(this.state.itemClicked === 'recommend') ? "nav-item-recommendation-clicked" : "nav-item-recommendation"}
                            onClick={(e) => this.navClickHandler(e, 'recommend')}>推荐</a>
                        </span>
                        <span className="nav-item-container">
                            <a className={(this.state.itemClicked === 'hot') ? "nav-item-hot-clicked" : "nav-item-hot"}
                            onClick={(e) => this.navClickHandler(e, 'hot')}>热门</a>
                        </span>
                        <span className="nav-item-container">
                            <a className={(this.state.itemClicked === 'promo') ? "nav-item-promo-clicked" : "nav-item-promo"}
                            onClick={(e) => this.navClickHandler(e, 'promo')}>优惠</a>
                        </span>
                    </div>
                </div>
                <div className="list-wrapper">
                    {(this.state.itemClicked === 'nearby-eats') ? (
                        <DefaultList/>
                    ) : (<div></div>)}
                </div>
            </div>
        );
    }
}

export default withRouter(NavigationBar);
