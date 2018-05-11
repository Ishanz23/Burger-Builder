import React from 'react';
import PropTypes from 'prop-types';

import classes from './Backdrop.css';

const backdrop = props => (props.show ? <div className={classes.Backdrop} /> : null);

export default backdrop;
