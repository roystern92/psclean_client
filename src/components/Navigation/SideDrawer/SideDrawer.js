import React, { Fragment } from 'react';
import Logo from '../../Logo/Logo';
import { NavLink } from 'react-router-dom';

import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';

// Todo  make routesTypes file

const CLEANING_ROUTE = '/clean';
const GARDENING_ROUTE = '/garden';
const ABOUT_ROUTE = '/about';
const CONTACT_ROUTE = '/contact';


const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    let routes = <nav>
    <NavLink exact to={CLEANING_ROUTE}>
        <div className={classes.MobileNavItem}>
            נקיון ואחזקה
        </div>
    </NavLink>
    <hr />
    <NavLink exact to={GARDENING_ROUTE}>
        <div className={classes.MobileNavItem}>
            גינון
        </div>
    </NavLink>
    <hr />
    <NavLink exact to={ABOUT_ROUTE}>
        <div className={classes.MobileNavItem}>
            אודות
        </div>
    </NavLink>
    <hr />
    <NavLink exact to={CONTACT_ROUTE}>
        <div className={classes.MobileNavItem}>
            צור קשר
        </div>
    </NavLink>
</nav>;


    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')} onClick={props.closed}>
                {routes}
            </div>
        </Fragment>
    );
};

export default sideDrawer;