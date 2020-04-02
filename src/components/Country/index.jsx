import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import CountryGraph from '../CountryGraph';
import CountryList from '../CountryList';

import { getCountryHistories } from '../../data';

import './index.css';

const Country = ({ match }) => {
    const country = match.params.country;
    const [data, setData] = useState([]);

    useEffect(() => {
        getCountryHistories(country, res => {
            setData(res);
        });
    }, [country]);

    return (
        <div>
            <Link to='/'>back to world data</Link>
            <h1>Country Data : {country}</h1>
            <h2>Country Graph</h2>
            <CountryGraph data={data} />
            <h2>Country List</h2>
            <CountryList data={data} />
        </div>
    );
};

export default Country;
