import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from '../views/Login'

const Home = () => (
    <div><h1>Home</h1></div>
)

const NotFound = () => (
    <div><h1>404</h1></div>
)

const Register = () => (
    <div>
        <h1>register</h1>
    </div>
)

const PageRouter = () => (
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="account/login" component={Login} />
        <Route path="account/register" component={Register} />
        <Route component={NotFound} />
    </Switch>
)

export default PageRouter;