import React from 'react';
import PropTypes from 'prop-types';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => [...Array(props.ingredients[ingredientKey])].map((_, i) =>
      <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />))
    .reduce((arr, el) => arr.concat(el), []);
  if (transformedIngredients.length < 1) {
    transformedIngredients = <p>Please add some Ingredients!</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

burger.propTypes = {
  type: PropTypes.object
};

export default burger;
