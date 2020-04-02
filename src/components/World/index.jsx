import React, { useState, useEffect } from 'react';

import { getWorldData } from '../../data';

import WorldMap from '../WorldMap';
import WorldList from '../WorldList';

import './index.css';

const World = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getWorldData(res => {
            setData(res);
        });
    }, []);

    return (
        <div className='world'>
            <h1>World Data</h1>
            <h2>World Map</h2>
            <WorldMap data={data} />
            <h2>World List</h2>
            <WorldList data={data} />
        </div>
    );
};

export default World;
