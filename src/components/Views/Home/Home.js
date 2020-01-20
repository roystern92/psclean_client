import React, { Component } from 'react'
import Header from '../../Header/Header';
import Card from '../../Card/Card';

class Home extends Component {
    render() {
    
        return (
            <div>
                <Header/>
                <Card title='למה לבחור בנו? ' content='נקיון זה לא צחוק, זה צורך זמן, מאמץ ולכלוך.
                    אנחנו יודעים שהנקיון והתחזוקה חשובים לכם לכן אנו מתמקדים באיכות.' />    
            </div>
        )
    }
}


export default Home;
