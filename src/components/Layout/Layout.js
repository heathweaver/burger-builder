import Aux from '../../hoc/Aux';
import classes from './Layout';
import React from 'react';


const layout = ( props ) => (
  <Aux>
    <div>Header, Navigation, Menu, Leaf</div>
    <main className={classes.Content}>
      {props.children}
    </main>
  </Aux>
)

export default layout;
