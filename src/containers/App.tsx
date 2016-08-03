import * as React from 'react';
import './App.scss';
import {Link} from 'react-router';
let logo = require('../logo.svg');


class App extends React.Component<any, any> {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Link to='/products'> Products</Link>
            {' '}
            <Link to='/list'> List</Link>
          </div>
          <hr/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
