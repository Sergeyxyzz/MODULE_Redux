import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from './reducer'
import App from "./components/app";

const store = createStore(reducer) // создал store, с логикой функции reducer
 
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
, document.getElementById('root'))