import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './Store.js'

import AppRouter from './routes/router.js';

const App = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
