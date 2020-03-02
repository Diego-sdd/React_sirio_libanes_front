import React from 'react';

import { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import Nav from './pages/components/navbar';
import Body from './pages/body';
import Footer from './pages/components/footer';


const Routes = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/">
                <Nav />
                <Body />
                <Footer />
            </Route>
        </Switch>
    </HashRouter>
);

export default Routes;

