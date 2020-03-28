import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Wrapper from 'react-div-100vh';

import Header from '../Header';
import Core from '../Core';

import './index.css';

const App = () => {
    return (
        <Wrapper className='app'>
            <BrowserRouter>
                <Header />
                <Core />
            </BrowserRouter>
        </Wrapper>
    );
};

export default App;
