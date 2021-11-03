//import store from "./redax/redux_store";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import SamuraiJSApp from "./App";

/*setInterval( () => {
    store.dispatch({type: "FAKE"})
}, 1000);*/

    ReactDOM.render(

        <SamuraiJSApp />
       , document.getElementById('root'));

