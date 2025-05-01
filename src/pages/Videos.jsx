import React from 'react';
import HomeApi from '../customHooks/HomeApi';

const Videos = () => {
    const videoApi='/videoapi.json'
    return (
        <>
        <HomeApi apiData={videoApi} />
        </>
    );
};

export default Videos;