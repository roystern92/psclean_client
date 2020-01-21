import React, { Component } from 'react';
import classes from './About.module.css';

class About extends Component {
    render() {

        let card  =
            <div className={classes.About}>
                <h1 className={classes.Title}>אודות פ.ש.</h1>
                <p className={classes.Content}>חברת פ.ש. הינה חברת אחזקה ונקיון אשר שמה את הדגש על האיעות. כל העובדים שלנו מועסקים במשרה מלאה ומתייחסים לכל עבודה ואתגר בכובד ראש. בנוסף לכך אנו יודעים שכל עבודה ההיא שונה ולכל לקוח יש את הדרישות שלו ולכן חשוב שתדעו שפ.ש. איננו מפחדים מאתגרים ועושים הכל כדי שהלקוח יהיה מרוצה.</p>
            </div>;

        return card;


    }
}


export default About;