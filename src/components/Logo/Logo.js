import React from 'react';
import classes from './Logo.module.css';
import { NavLink } from 'react-router-dom';

const logo = (props) => (
        <NavLink exact to={'/'}>
            <div className={classes.Container}>
                <div className={classes.Title}>
                    <h2 >פ.ש.</h2>
                </div>
           </div>
    </NavLink>

);

export default logo;