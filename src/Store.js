import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as AppReducer } from './views/App';
import thunkMiddleware from 'redux-thunk';
import immutableStateInvariantMiddleware from 'redux-immutable-state-invariant';

const win = window;

const middlewares = [thunkMiddleware];

const Reducer = combineReducers({
    App: AppReducer
});

if (process.env.NODE_ENV !== 'production') {
    middlewares.push(immutableStateInvariantMiddleware());
}

const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(Reducer, {}, storeEnhancers);