import React, { useEffect, useState } from 'react';
import HomeApi from '../customHooks/HomeApi';

const Home = () => {
    const apiData='/homeapi.json'
    return (
        <>
        <HomeApi apiData={apiData} />
        </>
    );
};

export default Home;