import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import NotFound from "./components/pages/NotFound.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Instance from "./components/pages/Instance.jsx";
import Header from "./components/assets/Header/Header.jsx";
import Filter from "./components/assets/Filter/Filter.jsx";
import {CurrencyProvider} from "./components/context/currencyContext";
import Pairs from "./components/pages/Pairs.jsx";
import About from "./components/pages/About.jsx";
import Help from "./components/pages/Help.jsx";
import Contacts from "./components/pages/Contacts.jsx";


export default withRouter(function App({location}) {
    return (

            <CurrencyProvider>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/instance" component={Instance}/>
                    <Route path="/pairs" component={Pairs}/>
                    <Route path="/about" component={About}/>
                    <Route path="/help" component={Help}/>
                    <Route path="/contact" component={Contacts}/>
                    <Route path="/filter" component={Filter}/>
                    <Route component={NotFound}/>
                </Switch>
            </CurrencyProvider>

    );
})