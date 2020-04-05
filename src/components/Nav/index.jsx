import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { getCountries } from '../../data';

import FeatherIcon from 'feather-icons-react';

import './index.css';

const Nav = ({ isOpenNav, setIsOpenNav }) => {
    const [isOpenCountries, setIsOpenCountries] = useState(false);
    const [countries, setCountries] = useState([]);
    const [results, setResults] = useState([]);

    useEffect(() => {
        getCountries((res) => {
            setCountries(res);
            setResults(res);
        });
    }, []);

    const _handleClose = () => {
        setIsOpenNav((isOpenNav) => !isOpenNav);
    };

    const _handleOpenCountries = () => {
        setIsOpenCountries((isOpenCountries) => !isOpenCountries);
    };

    const _handleSearch = (e) => {
        const keyword = e.target.value.toLowerCase();

        if (keyword === '') {
            setResults(countries);
        } else {
            setResults(
                countries.filter((element) => {
                    return element.toLowerCase().match(keyword);
                })
            );
        }
    };

    const _handleGitHub = () => {
        window.open('https://github.com/aidandlim/', '_blank');
    };

    const _handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aidan-lim/', '_blank');
    };

    return (
        <div className={isOpenNav ? 'nav-active' : 'nav'}>
            <div className='nav-close' onClick={_handleClose}>
                CLOSE
            </div>
            <Link to='/' onClick={_handleClose}>
                <div className='nav-menu'>
                    <div className='nav-menu-title'>
                        <FeatherIcon className='nav-menu-icon' icon='chevron-right' />
                        WORLD DATA
                    </div>
                </div>
            </Link>
            <div className='nav-menu' onClick={_handleOpenCountries}>
                <div className='nav-menu-title'>
                    <FeatherIcon className='nav-menu-icon' icon={isOpenCountries ? 'chevron-down' : 'chevron-right'} />
                    COUNTRIES DATA
                </div>
            </div>
            <div className={isOpenCountries ? 'nav-countries-active' : 'nav-countries'}>
                <input className='nav-country-search' type='text' placeholder='Search' onChange={_handleSearch} />
                {results.map((country, index) => (
                    <Link to={`/country/${country}`} key={index} onClick={_handleClose}>
                        <div className='nav-country'>{country}</div>
                    </Link>
                ))}
            </div>
            <div className='nav-about'>By Aidan</div>
            <div className='nav-about-detail'>
                <FeatherIcon className='nav-about-icon' icon='mail' />
                aidandlim@gmail.com
            </div>
            <div className='nav-about-detail' onClick={_handleGitHub}>
                <FeatherIcon className='nav-about-icon' icon='github' />
                GitHub
            </div>
            <div className='nav-about-detail' onClick={_handleLinkedIn}>
                <FeatherIcon className='nav-about-icon' icon='linkedin' />
                LinkedIn
            </div>
        </div>
    );
};

export default Nav;
