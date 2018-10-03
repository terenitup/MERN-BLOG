import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';
import Signup from './components/signup';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route to='/signup' component={Signup}/>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
