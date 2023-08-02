import React from "react";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import { Provider } from "react-redux";
import hello from "./reducers/hello";
import todos from "./reducers/todos-reducer";
import { configureStore } from "@reduxjs/toolkit";
import {createStore} from "redux";
import Todos from "./todos-component";
const store = configureStore({reducer:{hello,todos}});

const ReduxExamples = () => {
    return (
        <Provider store={store}>
        <div>
            <h2>Redux Examples</h2>
            <Todos/>
            <HelloReduxExampleComponent/>
        </div>
        </Provider>
    );
};

export default ReduxExamples;