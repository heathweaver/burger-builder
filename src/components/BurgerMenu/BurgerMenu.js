import classes from './BurgerMenu.css';
import MenuItems from './MenuItems/MenuItems'
import React from 'react';

const burgerMenu = (props) => {
  return (
    <div className={classes.Burger}>
      <MenuItems type="bread-top" />
      <MenuItems type="salad" />
      <MenuItems type="bacon" />
      <MenuItems type="cheese" />
      <MenuItems type="meat" />
      <MenuItems type="bread-bottom" />
    </div>
  );
};

export default burgerMenu;
