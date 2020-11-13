import React from "react";
import './Styles/App.css';
import Main from "./Containers/Main";
import {Switch, Route} from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <>
                <Switch>
                    <Route path='/' component={Main}/>
                </Switch>
            </>
        );
    }
}

export default App;
