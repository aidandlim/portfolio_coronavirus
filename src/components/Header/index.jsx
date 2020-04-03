import React from 'react';

import FeatherIcon from 'feather-icons-react';

import CI from '../../assets/favicon.png';
import './index.css';

const Header = () => {
    const _handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/aidan-lim/', '_blank');
    };

    const _handleGitHub = () => {
        window.open('https://github.com/aidandlim/', '_blank');
    };

    return (
        <header className='header'>
            <div className='header-ci' style={{ backgroundImage: `url('${CI}')` }}></div>
            <div className='header-title'>Overview of COVID-19</div>
            <FeatherIcon className='header-about-icon' icon='linkedin' onClick={_handleLinkedIn} />
            <FeatherIcon className='header-about-icon' icon='github' onClick={_handleGitHub} />
            <div className='header-about'>by Aidan</div>
        </header>
    );
};

export default Header;
