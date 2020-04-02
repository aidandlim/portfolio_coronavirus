import React, { useState, useEffect } from 'react';

import { getWorldData } from '../../data';

import WorldGraph from '../WorldGraph';
import WorldList from '../WorldList';

import './index.css';

const World = () => {
    const [data, setData] = useState([]);
    const [allData, setAllData] = useState(null);

    useEffect(() => {
        getWorldData(res => {
            setData(res);
            setAllData(res.find(data => data.country === 'All'));
        });
    }, []);

    return (
        <div className='world'>
            <div className='world-container'>
                <span className='world-title'>Current status of COVID-19 infections worldwide</span>
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> Statistics
                </div>
                <div className='world-description'>
                    This data is plotted to make the information easier to understand. 
                    Each diagram shows various indicators of the current infection situation.</div>
                <WorldGraph allData={allData} />
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> Status
                </div>
                <div className='world-description'>
                    This is the coronavirus infection status table. 
                    This list is arranged in order of total infections. 
                    You can click on each country for more information. 
                    All data is collected from the public API.
                </div>
                <WorldList data={data} />
            </div>
        </div>
    );
};

export default World;
