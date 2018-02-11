import React from 'react';
import classes from './BurgerIngredients.css';

const menuItems = (props) => {
  let items = null;

  switch (props.type) {
    case ('bread-bottom'):
      item = <div className={classes.BreadBottom}></div>;
      break;
    case ('bread-top'):
      item = (
        <div className={classes.BreadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;

    case ('meat'):
      item = <div className={classes.Meat}></div>
      break;

    case ('cheese'):
      item = <div className={classes.Cheese}></div>
      break;

    case ('salad'):
      item = <div className={classes.Salad}></div>
      break;

    case ('bacon'):
      item = <div className={classes.Bacon}></div>
      break;
    default:
      item = null;
  }
};

export default menuItems;
