import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import Browse from './containers/Browse.js';
import Signup from './containers/Signup.js';
import Signin from './containers/Signin.js';
import store from './store.js';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render(
  <Provider store={store}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<Route path="signin" component={Signin} />
  			<Route path="signup" component={Signup} />
  			<Route path="browse" component={Browse} />
  		</Route>
  	</Router>
  </Provider>,
  document.getElementById('root')
);
