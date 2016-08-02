import * as React from 'react';
import './App.scss';
let logo = require('./logo.svg');


class App extends React.Component<any, any> {
  render() {
    const message = "Welcome";

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{message}</h2>
        </div>
        <p className="App-intro">

          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
