import React from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import DotLoader from "react-spinners/DotLoader";
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store'
import { BrowserRouter } from 'react-router-dom'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

const LoadingIndicator = props => {
    const { promiseInProgress } = usePromiseTracker()
    return promiseInProgress &&
    <div>
    {/* <div className="spinner"
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    > */}
      <DotLoader />
    </div>
};

ReactDOM.render(<Provider store={ store }><BrowserRouter><App /><LoadingIndicator/></BrowserRouter></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
