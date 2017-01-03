import React from 'react';
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/ui/Home';
import About from './components/ui/About';
import MemberList from './components/ui/MemberList';
import  { Left, Right, Notfound404  } from './components';

export default () =>
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="/" component={Left}>
        	<Route path="about" component={About} />
        	<Route path="members" component={MemberList} />
        </Route>
        <Route path="*" component={Notfound404} />
    </Router>
