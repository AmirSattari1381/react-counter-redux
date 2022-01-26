import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import { myStore } from "./store"; //چون اسمش فایلش رو indexگذاشتیم خود webpackمیفهمه ک باید اون رو از فلدر store بگیره

//Reducer
//Action
//Store
//Dispatch

ReactDOM.render(
    <Provider store={myStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
