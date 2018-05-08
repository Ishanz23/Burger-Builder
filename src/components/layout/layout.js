import React, { Fragment } from 'react';
import classes from './layout.css';
/* eslint-disable */
const layout = props => (
  <Fragment>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>{props.children}</main>
  </Fragment>
);
/* eslint-disable */
export default layout;
