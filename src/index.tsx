import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, hashHistory } from 'react-router'

import './index.css';
import reducer from './reducers';
import App from './containers/App';
import ProductList from './containers/ProductList';
import ListItems from './containers/ListItems';

const store = createStore(reducer, {},
  compose(
    applyMiddleware(thunk),
    window["devToolsExtension"] ? window["devToolsExtension"]() : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Router path='/' component={App}>
        <Router path='/products' component={ProductList}/>
        <Router path='/list' component={ListItems}/>
      </Router>
    </Router>
  </Provider>,
  document.getElementById('root')
);
