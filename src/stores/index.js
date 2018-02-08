import userinfo from './reducers/userinfo.js';
import { combineReducers } from 'redux';
import * as commonActions from './actions.js';

const commonReducers = combineReducers({
    userinfo: userinfo
});

export { commonActions, commonReducers }