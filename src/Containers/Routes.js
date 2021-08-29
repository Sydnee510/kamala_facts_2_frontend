import React from "react";
import About from "../Components/About/About";
import Navbar from "../Navbar/Navbar";
import Myths from "../Components/Myths/Myths";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../style.css";

export default function Routes() {  
    return (
        <div className="App">
            <center>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Myths} />
                        <Route path="/about" component={About} />
                    </Switch>
                </Router>
            </center>
        </div>
    );
}