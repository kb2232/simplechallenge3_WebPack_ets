import React from 'react';
import ReactDOM from 'react-dom';

import './index.css'
import App from './app';

const store = createStore(reducers,applyMiddleware(thunk));

ReactDOM.render(
    <App />
, document.getElementById('root'));