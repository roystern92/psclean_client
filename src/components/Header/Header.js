import classes from './Header.module.css';
import React, { Component } from 'react'


class Header extends Component {


    render() {

        let header  =  
        <header className={classes.Header}>
            <div className={classes.Title}>
            <h1>אנחנו מנקים</h1>
            <h1>אתם נחים</h1>
            </div>
           
        </header>;
        return header;
    }
}

export default Header;
