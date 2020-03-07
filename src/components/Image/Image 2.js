import React, { Component } from 'react';
import classes from './Image.module.css';

class Image extends Component {
    render() {

        let cardClasses = [classes[this.props.class]];
        cardClasses.push(classes.Image);

        let card =
            <div className={cardClasses.join(' ')}>
                <img src={require('../../assets/images/' + this.props.img)} alt="text"/>
            </div>;  

        return card;
    }
}


export default Image;