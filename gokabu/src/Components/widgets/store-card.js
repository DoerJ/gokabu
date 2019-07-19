import React from 'react';
import '../../Styles/widgets/store-card.css';

const StoreCard = (props) => {
    return (
        <div className="store-card-wrapper">
            <div className="store-image-block"><img src={props.image}/></div>
            <div className="store-info-block">
                <div className="store-name-block">{props.name}</div>
                <div className="store-distance-block">{props.distance} km</div>
                <div className="store-rating-block">Rating: {
                    (!props.rating ? 5 : props.rating)
                }</div>
            </div>
            <div className="store-rules-block">
                {props.rules.map((item, index) => {
                    return (
                        <span className="store-rules-item" key={index}>{item.desc}</span>
                    );
                })}
            </div>
        </div>
    );
}

export default StoreCard;
