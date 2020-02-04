import React, { Component } from 'react'
import classes from './Footer.module.css';

class Footer extends Component {
    render() {
        return (
            <div className={classes.Footer}>
                <h3 className={classes.Contact}>פניאל שלום | טלפון: 0549887777</h3>
                <h3 className={classes.Rights}>כל הזכויות שמורות ל: A.R.W</h3>
            </div>
        )
    }
}

export default Footer;

