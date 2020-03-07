import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = (props) => {

    let navigationItems = (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/clean" exact>ניקיון ואחזקה</NavigationItem>
            <NavigationItem link="/garden" exact>גינון</NavigationItem>
            <NavigationItem link="/about" exact>אודות</NavigationItem>
            <NavigationItem link="/contact" exact>צור קשר</NavigationItem>
        </ul>
    );


    return (
        navigationItems
    );
};

export default navigationItems;