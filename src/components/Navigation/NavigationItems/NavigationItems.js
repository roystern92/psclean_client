import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {


    let  navigationItems = (
            <ul className={classes.NavigationItems}>
                <NavigationItem link="/my-day" exact>Home</NavigationItem>
                <NavigationItem link="/my-day" exact> ניקיון ואחזקה</NavigationItem>
                <NavigationItem link="/my-day" exact>גינון</NavigationItem>
                <NavigationItem link="/my-day" exact>אודות</NavigationItem>
                <NavigationItem link="/my-day" exact>צור קשר</NavigationItem>
            </ul>
        );


    return (
        navigationItems
    );
};

export default navigationItems;