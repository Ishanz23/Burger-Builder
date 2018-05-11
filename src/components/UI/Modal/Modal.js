import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';

const modal = props => (
  <Fragment>
    <Backdrop show={props.show} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translate(-100vh)',
        opacity: props.show ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  </Fragment>
);

modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default modal;
