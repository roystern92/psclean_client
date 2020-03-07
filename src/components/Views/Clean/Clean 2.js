import React, { Component } from 'react'
import Card from '../../Card/Card';
import Image from '../../Image/Image';
import classes from '../Home/Home.module.css';

class Clean extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }


    render() {
    
        return (
            <div>
                 <Card
                 header={true}   
                title='נקיון ואחזקה' 
                content='אנחנו מספקים שירותי נקיון ואחזקה מלאה עבור בניני מגורים, בתים פרטים ומשרדים.'
                 />

                <section className={classes.Row}> 
                    <Image class='' img='postRenovation.jpg'/> 
                    <Card title='ניקיון לאחר שיפוץ' content='מכאוס לסדר. לאחר כל שיפוץ מופיעים האבק והלכלוך, לכן תצטרך לצידך צוות שיתן לך את מירב תשומת הלב.' />  
                </section>


                 <section className={classes.Row}> 
                 <Image class=''  img='Maintenance1.jpg'/> 
                 <Card   
                title='אחזקה'
                content='זמן שווה כסף, ותיחזוק נכס דורש זמן. אנו מספקים החל מהלפת מנעולים, שירותי הדברה, צביעת קירות ועד אחזקה שוטפת של הנכס.'
                 />
                </section>

                <section className={classes.Row}> 
                    <Image class='' img='livingRoom.png'/> 
                    <Card title='ניקוי בתים פרטים ודירות' content='אנחנו מבינים את החשיבות של בית נקי ומסודר. לכן אנו מתמקדים באיכות הנקיון. שטיפה כללית של הבית, ניקוי גגות, ניקוי מרזבים, והברקת חלונות הבית.' />
                    
                </section>

                <section className={classes.Row}> 
                 <Image class=''  img='OfficeAndBuildin4.jpg'/> 
                 <Card   
                title='ניקוי מבנים'
                content='אנחנו מספקים שירותי נקיון כללים למשרדים ולבניני מגורים. החל משטיפת החלונות, דלתות, וריצפת הלובי, ניקוי חדר המדרגות, איסוף האשפה, ועד טיפול מלא של גינות. '
                 />
                </section>

                <section className={classes.Row}> 
                    <Image class='' img='polish.jpg'/> 
                    <Card title='פוליש'
                    content='רצפה נוצצת בבית וגם במשרד. אנו מספקים מגוון של שירותי פוליש, מפוליש קריסטל ועד פוליש וקס.'
                    />
                    
                </section>






            </div>
        )
    }
}


export default Clean;
