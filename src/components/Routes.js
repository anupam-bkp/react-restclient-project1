import React from 'react';

import { Router, Switch, Route} from 'react-router-dom'; 

import history from '../history';

import FirstPage from './FirstPage';
import LoginForm from './Forms/LoginForm';
import SignupForm from './Forms/SignupForm';
import DisplayUsers from './Users/DisplayUsers';

const routes = () => {

    return(
        <Router history={history}>
        <Switch>
          <Route path="/" exact component={FirstPage}/>  
          <Route path="/loginForm" component={LoginForm}/>
          <Route path="/signupForm" component={SignupForm}/>
          <Route path="/displayUsers" component={DisplayUsers}/>
        </Switch>
      </Router>
    );

}

export default routes;