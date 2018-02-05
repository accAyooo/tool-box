import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';

import AppRouter from './routes/router.js';

const App = () => (
    <Provider>
        <AppRouter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
