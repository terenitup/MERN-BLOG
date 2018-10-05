import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Switch, Route } from 'react-router-dom';
import reducers from './reducers';

import Thunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(Thunk)(createStore);

import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';

import Signup from './components/signup';
import Signin from './components/signin';
import Dashboard from './components/dashboard';

class Home extends Component {
  render() { return <h1>hmmm</h1> }
}

import { createBrowserHistory } from 'history';

function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={createBrowserHistory({})}>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signup' component={Signup}/>
          <Route path='/signin' component={Signin}/>
          <Route path='/dashboard' component={Dashboard}/>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
