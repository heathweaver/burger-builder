import Aux from '../../hoc/Aux';
import BurgerMenu from '../../components/BurgerMenu/BurgerMenu';
import React, { Component } from 'react';

class BurgerLeaf extends Component {
  render () {
    return (
      <Aux>
        <BurgerMenu />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerLeaf;
