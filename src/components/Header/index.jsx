import React from 'react';

import CI from '../../assets/favicon.png';
import './index.css';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-ci' style={{backgroundImage: `url('${CI}')`}}></div>
            <div className='header-title'>Overview of COVID-19</div>
        </header>
    );
};

export default Header;
