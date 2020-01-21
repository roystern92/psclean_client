import classes from './Header.module.css';
import React, { Component } from 'react'


class Header extends Component {


    render() {

        let header  =  
        <header className={classes.Header}>
            <div className={classes.Title}>
            <h1> פ.ש.</h1>
            <h1>נקיון ואחזקה</h1>
            </div>
           
        </header>;
        return header;
    }
}

export default Header;
