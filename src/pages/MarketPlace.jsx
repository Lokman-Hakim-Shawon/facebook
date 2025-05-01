import React from 'react';
import CardApi from '../customHooks/CardApi';

const MarketPlace = () => {
    const cardApi="/cardapi.json"
    return (
        <>
        <CardApi cardApi={cardApi} />
        </>
    );
};

export default MarketPlace;