import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import { NewStoreState } from './types/index';
import { GETACTION } from './actions';

const store = createStore<NewStoreState, GETACTION, unknown, unknown>(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Hello />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
