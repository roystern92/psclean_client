import React, { Component } from "react";
import Header from "../../Header/Header";
import Card from "../../Card/Card";
import Image from "../../Image/Image";
import classes from "./Home.module.css";
import { animateScroll } from "react-scroll";

class Home extends Component {
  scrollToTop() {
    animateScroll.scrollToTop({
      containerId: "scroll"
    });
  }

  componentDidMount() {
    this.scrollToTop();
  }

  render() {
    return (
      <div className={classes.Home}>
        <Header />

          <Card
            header={true}
            title="למה לבחור בנו? "
            content="נקיון זה לא צחוק, זה צורך זמן, מאמץ ולכלוך.
                    אנחנו יודעים שהנקיון והתחזוקה חשובים לכם, לכן אנו מתמקדים באיכות."
          />

        <section className={classes.Grid}>
          <Image class="" img="clean3.jpeg" />

          <Card
            title="נקיון ואחזקה"
            content="אנחנו מספקים שירותי נקיון ואחזקה מלאה עבור בניני מגורים, בתים פרטים ומשרדים."
            text="למידע נוסף..."
            route="/clean"
          />
        </section>

        <section className={classes.Grid}>
          <div className={classes.GridItem1}>
            <Image class="" img="gardening1.jpg" />
          </div>

          <div className={classes.GridItem2}>
            <Card
              title="שרותי גינון"
              content="אנחנו מספקים מגוון רחב של שירותי גינון. מכיסוח דשא, גיזום עצים ועד תחזוק שוטף של הגינה."
              text="למידע נוסף..."
              route="/garden"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
