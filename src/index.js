import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from "./Components/Login/Login";
import UserProfil from "./Components/UserProfil/UserProfil";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const EntryApp = () => {
    return (
        <Switch>
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/" component={App} /> 
            <Route exact path="/UserProfil" component={UserProfil} /> 
        </Switch>
    )
}
ReactDOM.render(
<Router>
<EntryApp />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
