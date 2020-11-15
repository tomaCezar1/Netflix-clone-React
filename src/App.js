import React from "react";
import './Styles/App.css';
import Main from "./Containers/Main";
import {Switch, Route, HashRouter} from "react-router-dom";
import Login from "./Containers/Login";

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/login' component={Login}/>
                </Switch>
            </HashRouter>
        );
    }
}

export default App;
