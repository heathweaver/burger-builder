import BurgerLeaf from './containers/Leaf/BurgerLeaf';
import Layout from './components/Layout/Layout';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerLeaf />
        </Layout>
      </div>
    );
  }
}

export default App;
