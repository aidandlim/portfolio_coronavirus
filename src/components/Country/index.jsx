import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import CountrySummary from '../CountrySummary';
import CountryList from '../CountryList';

import { isMobile } from 'react-device-detect';

import { getCountryHistories } from '../../data';

import './index.css';

const Country = ({ match }) => {
    const country = match.params.country;
    const [data, setData] = useState([]);

    useEffect(() => {
        getCountryHistories(country, (res) => {
            setData(res);
        });
    }, [country]);

    return (
        <div className='country'>
            <div className='country-container'>
                <div className='country-back-container'>
                    <Link to='/'>
                        <div className='country-back'>{`< BACK TO WORLD DATA`}</div>
                    </Link>
                </div>
                <span className='country-title'>Current status of COVID-19 in {country === 'All' ? 'the world' : country}</span>
                <div className='country-greeting'>
                    Random sentences can also spur creativity in other types of projects being done. If you are trying to come up with a new concept, a new idea or a new product, a random sentence may
                    help you find unique qualities you may not have considered. Trying to incorporate the sentence into your project can help you look at it in different and unexpected ways than you
                    would normally on your own.
                </div>
                <div className='country-subtitle'>
                    <font className='country-symbol'>✓</font> Summary
                </div>
                <div className='country-description'>
                    If you're visiting this page, you're likely here because you're searching for a random sentence. Sometimes a random word just isn't enough, and that is where the random sentence
                    generator comes into play. By inputting the desired number, you can make a list of as many random sentences as you want or need. Producing random sentences can be helpful in a
                    number of different ways.
                </div>
                {data.length !== 0 ? <CountrySummary data={data} /> : <div className={isMobile ? 'country-loading-mobile' : 'country-loading'}>Loading...</div>}
                <div className='country-subtitle'>
                    <font className='country-symbol'>✓</font> List by Date
                </div>
                <div className='country-description'>
                    For those writers who have writers' block, this can be an excellent way to take a step to crumbling those walls. By taking the writer away from the subject matter that is causing
                    the block, a random sentence may allow them to see the project they're working on in a different light and perspective. Sometimes all it takes is to get that first sentence down to
                    help break the block.
                </div>
                <CountryList data={data} />
            </div>
        </div>
    );
};

export default Country;
