import React, { Component } from 'react';
import classes from './Card.module.css';
import Button from '../UI/Button/Button';

class Card extends Component {
    render() {

        let button;
        if (this.props.hasButton) {
            button = <Button btnType={['AlignSelf']}>{this.props.buttonText}</Button>;
        }

        let card =
            <section className={classes.Card}>
                <h1 className={classes.Title}>{this.props.title}</h1>
                <p className={classes.Content}>{this.props.content} </p>
                {button}
            </section>;

        return card;
    }
}


export default Card;