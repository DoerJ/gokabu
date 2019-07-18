import React from 'react';

const StoreCard = (props) => {
    return (
        <div className="store-card-wrapper">
            <div className="store-name-block">{props.name}</div>
        </div>
    );
}

export default StoreCard;
