import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import usersReducer from './reducers/users.js'
import myBookcases from './reducers/bookcases.js'
import bookcaseForm from './reducers/bookcaseForm.js'
import { BrowserRouter as Router} from 'react-router-dom'

const reducer = combineReducers({
    user: usersReducer,
    myBookcases,
    bookcaseForm
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)) )

ReactDOM.render(<Router><Provider store={ store }><App /></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
