import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import Summary from '../Summary';
import List from '../List';

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
                    This website is designed to help you understand the status of the COVID-19. All data is collected in real-time from public APIs. You can see the status of the virus spread very
                    easily on the current page or pages by countries. This page consists of two parts largely: a summary area and a list area. I hope this information can help you understand this
                    virus. Also, stay healthy.
                </div>
                <div className='country-subtitle'>
                    <font className='country-symbol'>✓</font> Summary
                </div>
                <div className='country-description'>
                    In this summary part, you can check various data about the virus spread easily with a graph. In the first box, you can find out the total cases data also the number of newly
                    discovered confirmed people. In the next three graphs, they show each the number of recovered, critical and death cases. Finally, only on the country page, the line graph indicates
                    the change in the number of cases.
                </div>
                {data.length !== 0 ? <Summary type='country' data={data} /> : <div className={isMobile ? 'country-loading-mobile' : 'country-loading'}>Loading...</div>}
                <div className='country-subtitle'>
                    <font className='country-symbol'>✓</font> List by Date
                </div>
                <div className='country-description'>
                    In this list part, this table shows data by country or date. Each row has death cases and total cases that include active, critical, and recovered people data. In addition, you can
                    also check the percentage of that. Only on the world page, you can get details about the specific country by hitting the link on the country name.
                </div>
                <List type='country' data={data} />
            </div>
        </div>
    );
};

export default Country;
