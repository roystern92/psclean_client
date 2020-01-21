import React from "react";
import {Route, Switch, Redirect} from 'react-router-dom';
import Home from '../../components/Views/Home/Home';
import Clean from '../../components/Views/Clean/Clean';
import Garden from '../../components/Views/Garden/Garden';


const HOME_ROUTE = '/';
const CLEANING_ROUTE = '/clean';
const GARDENING_ROUTE = '/garden';
const ABOUT_ROUTE = '/about';
const CONTACT_ROUTE = '/contact';




const routes = (props) => {
    let routes = (
        <Switch>
            <Route path={CLEANING_ROUTE} exact component={Clean}/>
            <Route path={ABOUT_ROUTE} exact component={Home}/>
            <Route path={GARDENING_ROUTE} exact component={Garden}/>
            <Route path={CONTACT_ROUTE} exact component={Home}/>
            <Route path={HOME_ROUTE} exact component={Home}/>
            <Redirect to={HOME_ROUTE}/>
        </Switch>
    );


    return routes;
};


export default routes;