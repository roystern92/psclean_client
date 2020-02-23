import React from 'react';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const logo = (props) => (
        <NavLink exact to={'/'}>
                <div className={classes.Logo}>
                <img src={require('../../assets/images/logo.png')} alt="text"/>
                </div>
    </NavLink>

);

export default logo;