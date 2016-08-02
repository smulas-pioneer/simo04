import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
