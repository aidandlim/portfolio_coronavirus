import React, { useState, useEffect } from 'react';

import { getWorldData } from '../../data';

import WorldSummary from '../WorldSummary';
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
                <span className='world-title'>Current status of COVID-19 worldwide</span>
                <div className='world-greeting'>
                    Random sentences can also spur creativity in other types of projects being done. If you are trying to come up with a new concept, a new idea or a new product, a random sentence may
                    help you find unique qualities you may not have considered. Trying to incorporate the sentence into your project can help you look at it in different and unexpected ways than you
                    would normally on your own.
                </div>
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> Summary
                </div>
                <div className='world-description'>
                    If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence
                    generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a
                    number of different ways.
                </div>
                {allData !== null ? <WorldSummary allData={allData} /> : <div className='world-loading'>Loading...</div>}
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> List by Countries
                </div>
                <div className='world-description'>
                    For those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing
                    the block, a random sentence may allow them to see the project they're working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to
                    help break the block.
                </div>
                <WorldList data={data} />
            </div>
        </div>
    );
};

export default World;
