import React, { Component } from 'react'
import Header from '../../Header/Header';
import Card from '../../Card/Card';
import Image from '../../Image/Image';
import classes from './Home.module.css';

class Home extends Component {
    render() {
    
        return (
            <div className={classes.Home}>
                <Header/>
                
                <section className={classes.Grid}> 
                    <Image class='DesktopOnly' img='OfficeAndBuilding/OfficeAndBuilding2.jpg'/> 
                    <Card title='למה לבחור בנו? ' content='נקיון זה לא צחוק, זה צורך זמן, מאמץ ולכלוך.
                    אנחנו יודעים שהנקיון והתחזוקה חשובים לכם, לכן אנו מתמקדים באיכות.' />  
                </section>

                 <section className={classes.Grid}> 
                 <div className={classes.GridItem1}>
                 <Image class=''  img='cleanAndMaintenance/cleanAndMaintenance1.png'/> 
                 </div>

                     
                 <div className={classes.GridItem2}>
                 <Card   
                title='נקיון ואחזקה' 
                content='אנחנו מספקים שירותי נקיון ואחזקה מלאה עבור בניני מגורים, בתים פרטים ומשרדים.'
                text='למידע נוסף...'
                route='/clean' />
                 </div>

                
                </section>


                <section className={classes.Grid}> 
                <Image class=''  img='Gardening/gardening1.jpg'/> 
                <Card  
                title='שרותי גינון' 
                content='אנחנו מספקים מגוון רחב של שירותי גינון. מכיסוח דשא, גיזום עצים ועד תחזוק שוטף של הגינה.'
                text='למידע נוסף...'
                route='/garden' />
                </section>




            </div>
        )
    }
}


export default Home;
