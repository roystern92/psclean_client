import React, { Component } from 'react';
import classes from './Card.module.css';
import Button from '../UI/Button/Button';
import { NavLink } from 'react-router-dom';

class Card extends Component {
    
    render() {

        let cardClass = this.props.header ? classes.Header : classes.Card;

        let link;
        if (this.props.route) {
            link =
                <NavLink exact to={this.props.route}>
                    <Button btnType={['AlignSelf']}>{this.props.text}</Button>
                </NavLink>;
        }

        let card =
            <div className={cardClass}>
                <h1 className={classes.Title}>{this.props.title}</h1>
                <p className={classes.Content}>{this.props.content} </p>
                {link}
            </div>;

        return card;


    }
}


export default Card;