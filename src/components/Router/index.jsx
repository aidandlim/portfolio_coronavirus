import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from '../Header';
import Now from '../Now';
import World from '../World';
import Country from '../Country';

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={Now} />
                <Route path='/world' exact component={World} />
                <Route path='/country/:country' exact component={Country} />
                <Route path='/' component={Error} />
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
