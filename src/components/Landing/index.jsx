import React, { useState, useEffect, Fragment } from 'react';

import { Link } from 'react-router-dom';

import { getWorldData } from '../../data';

import Summary from '../Summary';

import './index.css';

const Landing = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        getWorldData((res) => {
            setData(res);
        });
    }, []);

    return (
        <div className='landing'>
            <div className='landing-container'>
                {data.length !== 0 ? (
                    <Fragment>
                        <Summary type='world' data={data} />
                        <Link to='/world'>
                            <div className='landing-button'>GET DETAILS ABOUT COVID-19 RIGHT NOW</div>
                        </Link>
                    </Fragment>
                ) : (
                    <div className='landing-loading'>Loading...</div>
                )}
            </div>
        </div>
    );
};

export default Landing;
