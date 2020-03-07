import React, { Component } from 'react';
import classes from './About.module.css';
import {animateScroll} from "react-scroll";


class About extends Component {

    scrollToTop() {
        animateScroll.scrollToTop({
            containerId: "scroll"
        });
    };

    componentDidMount() {
        this.scrollToTop();
    }

    render() {

        let about  =
            <div className={classes.About}>
                <h1 className={classes.Title}>אודות פ.ש.</h1>
                <p className={classes.Content}>חברת פ.ש. הינה חברת אחזקה ונקיון אשר שמה את הדגש על האיכות. כל העובדים שלנו מועסקים במשרה מלאה ומתייחסים לכל עבודה ואתגר בכובד ראש. בנוסף לכך אנו יודעים שכל עבודה היא שונה ולכל לקוח יש את הדרישות שלו ולכן חשוב שתדעו שאיננו מפחדים מאתגרים ועושים הכל כדי שהלקוח יהיה מרוצה.</p>
            </div>;

        return about;


    }
}


export default About;