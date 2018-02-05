import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PageRouter from './PageRouters.js';
import App from '../views';

const AppRouter = () => (
    <Router>
        <App>
            <Route path="/" component={PageRouter} />
        </App>
    </Router>
)

export default AppRouter;