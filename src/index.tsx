import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, browserHistory } from 'react-router'

import './index.css';
import reducer from './reducers';
import App from './containers/App';

const store = createStore(reducer, {},
  compose(
    applyMiddleware(thunk),
    window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Router path='/' component={App}/>
    </Router>
  </Provider>,
  document.getElementById('root')
);
