import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';
import promiseMiddleware from './middlewares/promise_middleware.js';

import { commonReducers } from './stores/';

const win = window;

const Reducer = combineReducers({
    common: commonReducers
});

const middlewares = [promiseMiddleware];
if (process.env.NODE_ENV !== 'production') {
    middlewares.push(immutableStateInvariantMiddleware());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(Reducer, {}, storeEnhancers);