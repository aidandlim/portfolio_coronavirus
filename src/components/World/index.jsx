import React, { useState, useEffect } from 'react';

import { getWorldData } from '../../data';

import Summary from '../Summary';
import List from '../List';

import './index.css';

const World = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
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
                    easily on the current page and pages by countries. This world page consists of two parts largely: a summary area and a list area. I hope this information can help you understand
                    this virus. Also, stay healthy.
                </div>
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> Summary
                </div>
                <div className='world-description'>
                    If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence
                    generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a
                    number of different ways.
                </div>
                {data.length !== 0 ? <Summary type='world' data={data} /> : <div className='world-loading'>Loading...</div>}
                <div className='world-subtitle'>
                    <font className='world-symbol'>✓</font> List by Countries
                </div>
                <div className='world-description'>
                    For those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing
                    the block, a random sentence may allow them to see the project they're working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to
                    help break the block.
                </div>
                <List type='world' data={data} />
            </div>
        </div>
    );
};

export default World;
