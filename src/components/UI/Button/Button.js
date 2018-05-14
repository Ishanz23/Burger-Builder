import React from 'react';
import PropTypes from 'prop-types';

import classes from './Button.css';

const button = props => (
  <button className={[classes.Button, classes[props.btnType]].join(' ')} onClick={props.click}>
    {props.children}
  </button>
);

button.defaultProps = {
  btnType: 'Default',
  children: 'noName',
  click: () => console.warn('OnClick undefined!'),
};
button.propTypes = {
  btnType: PropTypes.oneOf(['Success', 'Danger']),
  children: PropTypes.string,
  click: PropTypes.func,
};

export default button;
