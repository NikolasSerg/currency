import React from "react";
import {Route, Switch, withRouter} from "react-router-dom";
import NotFound from "./components/pages/NotFound.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Instance from "./components/pages/Instance/Instance.jsx";
import Header from "./components/assets/Header/Header.jsx";
import Filter from "./components/assets/Filter/Filter.jsx";
import {CurrencyProvider} from "./components/context/currencyContext";


export default withRouter(function App({location}) {
    return (
        <>
            <CurrencyProvider>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/instance" component={Instance}/>
                    <Route path="/filter" component={Filter}/>
                    <Route component={NotFound}/>
                </Switch>
            </CurrencyProvider>
        </>
    );
})