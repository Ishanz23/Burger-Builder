import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../UI/Button/Button';

const orderSummary = props => {
  const ingredientsSummary = Object.keys(props.ingredients).map(igKey => (
    <li key={igKey}>
      <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
    </li>
  ));

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price:</strong> {props.totalPrice.toFixed(2)}/- INR
      </p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" click={props.purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" click={props.purchaseContinued}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default orderSummary;
