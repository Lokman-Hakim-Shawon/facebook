import React from 'react';
import HomeApi from '../customHooks/HomeApi';

const Groups = () => {
    const groupApi='/homeapi.json'
    return (
        <>
        <HomeApi apiData={groupApi} />
        </>
    );
};

export default Groups;