import React from 'react';

import classes from './PhoneLink.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

const phoneLink = (props) => (
    <div className={classes.PhoneLink}>
        <a href={'tel:' + props.phone}><FontAwesomeIcon size='3x' color='white' icon={faPhone} /></a>
    </div>
);

export default phoneLink;