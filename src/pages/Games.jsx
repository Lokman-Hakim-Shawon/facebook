import React from 'react';
import CardApi from '../customHooks/CardApi';

const Games = () => {
    const cardApi='/gameapi.json'
    return (
        <>
        <CardApi cardApi={cardApi} />
        </>
    );
};

export default Games;