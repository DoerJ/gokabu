import React, {Component} from 'react';
import {navModel} from '../../WebAPIs/data-model';
import StoreCard from '../widgets/store-card';

class DefaultList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultList: [],
            listLoaded: false,
            indexStart: 0
        }
    }

    componentDidMount = () => {
        this.loadDefaultList();
    }

    loadDefaultList = () => {
        navModel.nearby_eats({indexStart: this.state.indexStart}, (res) => {
            this.setState({
                defaultList: this.state.defaultList.concat(res.data.slice(this.state.indexStart, 20)),
                indexStart: this.state.indexStart + 20,
                listLoaded: true
            });
        }, (error) => {
            // error callback
        });
    }

    mappingDefaultList = () => {
        console.log(this.state.defaultList)
        return this.state.defaultList.map((item, index) => {
            return (
                <StoreCard name={item.store_name}
                    rating={item.rating}
                    distance={item.distance}
                    image={item.store_front_img}
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
            </div>
        );
    }
}

export default DefaultList;
