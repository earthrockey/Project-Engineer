import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Router ,browserHistory} from 'react-router';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import UserRegister from './components/UserRegister';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/app" component={App}/>
    <Route path="/userregister" component={UserRegister}/>
  </Router>
  , document.getElementById('root'));

serviceWorker.unregister();
