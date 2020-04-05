import React from 'react';

import { Link } from 'react-router-dom';

import FeatherIcon from 'feather-icons-react';

import './index.css';

const Header = ({ setIsOpenNav }) => {
    const _handleMenu = () => {
        setIsOpenNav((isOpenNav) => !isOpenNav);
    };

    return (
        <header className='header'>
            <FeatherIcon className='header-menu' icon='menu' onClick={_handleMenu} />
            <Link to='/'>
                <div className='header-title'>OVERVIEW OF COVID-19</div>
            </Link>
        </header>
    );
};

export default Header;
