import classes from './BurgerIngredients.css';
import PropTypes from 'prop-types';
import React from 'react';


function hyphenToCamelCase (hyphened) {
  if (typeof hyphened != "string" || hyphened.length==0)
    return "";
}
/**
 * Create the dynamic image of a burger
 * @param {props} Object
 */
const createMenuElements = (props) => {
  // return the item that matches
  // called from filter, so it's the checking aspect
  const isItem = item => item.type === props.type

  // What is being iterated in the map method
  // Creates the HTML element and adds proper class name
  // TODO Need to next a second item inside this one
  const setMenuItemClassName = item => <div key={item.id} className={item.className}></div>

  //
  const matchMenuItem = menuItems =>
    menuItems.filter(isItem)
      .map(setMenuItemClassName)

  const menuItems = [
    {id: 0, type: 'bread-bottom', className: classes.BreadBottom},
    {id: 1, type: 'bread-top',    className: classes.BreadTop},
    {id: 2, type: 'seeds',        className: classes.Seeds1},
    {id: 3, type: 'seeds',          className: classes.Seeds2},
    {id: 4, type: 'meat',         className: classes.Meat},
    {id: 5, type: 'cheese',       className: classes.Cheese},
    {id: 6, type: 'salad',        className: classes.Salad},
    {id: 7, type: 'bacon',        className: classes.Bacon},
  ];

  const element = matchMenuItem(menuItems);
  return element;

  // const getItem2 = switchcase(
  //   items2.reduce((acc, value) =>
  //     (acc[value] = <div className={value[1]}></div>, acc), {})
  // )("What is that?")

  // const switchcase = cases => defaultCase => key => cases.hasOwnProperty(key) ? cases[key] : defaultCase

  // const menuItems2 = switchcase({
  //   'bread-bottom': 'BreadBottom',
  //   'bread-top':    'BreadTop',
  //   'meat':         'Meat',
  //   'cheese':       'Cheese',
  //   'salad':        'Salad',
  //   'bacon':        'Bacon',
  // })('Unknown')

//   let item2 = null;
//
//   switch (item2) {
//     case 'bread-bottom': {
//       item2 = <div className={classes.BreadBottom}></div>;
//       break;
//     }
//     case 'bread-top': {
//       item2 = (
//         <div className={classes.BreadTop}>
//           <div className={classes.Seeds1}></div>
//           <div className={classes.Seeds2}></div>
//         </div>
//       );
//       break;
//     }
//     case 'meat': {
//       item2 = <div className={classes.Meat}></div>
//       break;
//     }
//     case 'cheese': {
//       item2 = <div className={classes.Cheese}></div>
//       break;
//     }
//     case 'salad': {
//       item2 = <div className={classes.Salad}></div>
//       break;
//     }
//     case 'bacon': {
//       item2 = <div className={classes.Bacon}></div>
//       break;
//     }
//     default: {
//       item2 = null;
//     }
//   }
};

createMenuElements.propTypes = {
  type: PropTypes.string.isRequired
};

export default createMenuElements;
