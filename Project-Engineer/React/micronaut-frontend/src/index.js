import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserRegister from './UserRegister'
import * as serviceWorker from './serviceWorker';
import { Router, Route, Link, browserHistory } from 'react-router';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/UserRegister" component={UserRegister}/>
  </Router>, document.getElementById('root')

);

serviceWorker.unregister();
