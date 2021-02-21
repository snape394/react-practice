import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from  'react-router-dom';
import { Homepage } from './components/first-component';
import { SecondComponent } from './components/second-component';


function AppRouting(){
    return (
        <Router>
            <Switch>
                <Redirect to={'/second'} from={'/'} exact></Redirect>
                <Route path={'/home'} component={Homepage}/>
                <Route path={'/second'} component={SecondComponent}/>
            </Switch>
        </Router>
    )
}

export default AppRouting;