import React, { useState } from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from '../Header';
import Nav from '../Nav';
import World from '../World';
import Country from '../Country';
import Error from '../Error';

const Router = () => {
    const [isOpenNav, setIsOpenNav] = useState(false);

    return (
        <BrowserRouter>
            <Header setIsOpenNav={setIsOpenNav}/>
            <Nav isOpenNav={isOpenNav} setIsOpenNav={setIsOpenNav} />
            <Switch>
                <Route path='/' exact component={World} />
                <Route path='/country/:country' exact component={Country} />
                <Route path='/error' component={Error} />
                <Redirect from='/' to='/error' />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
