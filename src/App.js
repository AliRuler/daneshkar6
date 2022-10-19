import './App.css';
import React from "react";
import {store} from "./redux/store";
import {Provider} from "react-redux";
import Home from "./components/home";

function App() {
    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App;
