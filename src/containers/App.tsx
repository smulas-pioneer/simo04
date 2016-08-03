import * as React from 'react';
import ProductList from '../components/ProductList';
import ListItems from '../components/ListItems';
import './App.scss';
let logo = require('../logo.svg');


class App extends React.Component<any, any> {
  render() {
    const message = "Welcome"; 

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <ProductList/>
        <ListItems/>
      </div>
    );
  }
}

export default App;
