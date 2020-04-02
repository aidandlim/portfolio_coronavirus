import React, { useState, useEffect } from 'react';

import { getWorldData } from '../../data';

import NowMap from '../NowMap';
import NowList from '../NowList';

import './index.css';

const Now = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getWorldData(res => {
            setData(res);
        });
    }, []);

    return (
        <div className='now'>
            <h1>NowMap</h1>
            <NowMap data={data} />
            <h1>NowList</h1>
            <NowList data={data} />
        </div>
    );
};

export default Now;
