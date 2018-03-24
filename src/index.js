import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import { getAllProducts } from "./actions"
const middleware = [thunk];

const store = createStore(
    reducer,
    applyMiddleware(...middleware)
);

store.dispatch(getAllProducts());
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
