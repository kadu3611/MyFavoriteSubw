import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import HomePage from '../App'
import PaginaTeste from '../Components/PaginaTeste'



function Routes() {

    return (
        <Switch>
            <Route exact path="/">
                <Redirect from="/" to="/login" />
            </Route>
            <Route exact path="/login" component={HomePage} />
            {/* <Route exact path="/PageTest" component={PaginaTeste} /> */}
        </Switch>
    )

}

export default Routes;
