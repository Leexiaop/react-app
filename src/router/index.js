import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import User from '../components/user/user';
import Details from '../components/details/details';

const BasicRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to='/user'/>}/>
                <Route exac path="/user" component={User} />
                <Route path="/details" component={Details}/>
            </Switch>
        </Router>
    )
}

export default BasicRouter;