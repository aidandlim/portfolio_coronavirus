import React, { useState, useEffect } from 'react';

import { getWorldData, getContinentData } from '../../data';

import Summary from '../Summary';
import List from '../List';

import './index.css';

const World = () => {
    const [data, setData] = useState([]);
    const [continentsData, setContinentsData] = useState([]);

    useEffect(() => {
        getContinentData((res) => {
            setContinentsData(res);
        });
        getWorldData((res) => {
            setData(res);
        });
    }, []);

    return (
        <div className='world'>
            <div className='world-container'>
                <span className='world-title'>Current status of COVID-19 worldwide</span>
                <div className='world-greeting'>
                    This website is designed to help you understand the status of the COVID-19. All data is collected in real-time from public APIs. You can see the status of the virus spread very
                    easily on the current page or pages by countries. This page consists of two parts largely: a summary area and a list area. I hope this information can help you understand this
                    virus. Also, stay healthy.
                </div>
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> Summary
                </div>
                <div className='world-description'>
                    In this summary part, you can check various data about the virus spread easily with a graph. In the first box, you can find out the total cases data also the number of newly
                    discovered confirmed people. In the next three graphs, they show each the number of recovered, critical and death cases. Finally, only on the country page, the line graph indicates
                    the change in the number of cases.
                </div>
                {data.length !== 0 ? <Summary type='world' data={data} /> : <div className='world-loading'>Loading...</div>}
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> List by Continents
                </div>
                <div className='world-description'>
                    As APIs are updated, it provides data of list by continents in this table. Each row has death cases and total cases that include active, critical, and recovered people data. In
                    addition, you can also check the percentage of that.
                </div>
                <List type='world' data={continentsData} />
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> List by Countries
                </div>
                <div className='world-description'>
                    In this list part, this table shows data by country or date. Each row has death cases and total cases that include active, critical, and recovered people data. In addition, you can
                    also check the percentage of that. Only on the world page, you can get details about the specific country by hitting the link on the country name.
                </div>
                <List type='world' data={data} />
            </div>
        </div>
    );
};

export default World;
