import React, {Component} from 'react';
import {navModel} from '../../WebAPIs/data-model';
import StoreCard from '../widgets/store-card';
import {debounce} from '../utils/debounce';
import '../../Styles/default-list.css';

class DefaultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            defaultList: [],
            listLoaded: false,
            indexStart: 0,
            bottomTouched: false
        }
    }

    componentDidMount = () => {
        this.loadDefaultList();
        // load scroll listener
        window.addEventListener('scroll', debounce(() => {
            if(window.scrollY + window.innerHeight === document.documentElement.scrollHeight) {
                this.setState({bottomTouched: true});
            }
        }, 500));
    }

    componentWillUpdate = (nextProps, nextState) => {
        if(nextState.bottomTouched) this.loadNextDefaultList();
    }

    loadNextDefaultList = () => {
        var indexStart = this.state.indexStart;
        this.setState({
            bottomTouched: false,
            defaultList: this.state.defaultList.concat(this.state.list.slice(indexStart, indexStart + 20)),
            indexStart: indexStart + 20
        });
    }

    loadDefaultList = () => {
        navModel.nearby_eats({indexStart: this.state.indexStart}, (res) => {
            var indexStart = this.state.indexStart;
            this.setState({
                list: res.data,
                defaultList: this.state.defaultList.concat(res.data.slice(indexStart, indexStart + 20)),
                indexStart: indexStart + 20,
                listLoaded: true
            });
        }, (error) => {

        });
    }

    mappingDefaultList = () => {
        return this.state.defaultList.map((item, index) => {
            return (
                <StoreCard name={item.store_name}
                    rating={item.rating}
                    distance={item.distance}
                    image={item.store_front_img}
                    rules={item.rules}
                    key={index}
                />
            );
        })
    }

    render() {
        var defaultList = this.mappingDefaultList();
        return (
            <div className="default-list-wrapper">
                {this.state.listLoaded ? (
                    <div className="default-list-container">{defaultList}</div>
                ) : (
                    <div className="loading-prompt-container">Loading</div>
                )}
                <div className="loading-zone-container">
                    {this.state.bottomTouched ? (
                        <div className="loading-prompt">Loading remainings...</div>
                    ) : (<div></div>)}
                </div>
            </div>
        );
    }
}

export default DefaultList;
