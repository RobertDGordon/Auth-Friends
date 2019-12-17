import React from 'react';
import { Route, Link, Switch, withRouter } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Account from './components/Account';
import './App.css';

function App() {

  const signedIn = getToken()

  return (
    <div className="App">
      <nav>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/login'>Login</Link>}
        {signedIn && <Link to='/account'>Account</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}
      </nav>
      <Route exact path='/login' component={Login} />
      <PrivateRoute exact path='/account' component={Account} />
    </div>
  );
}

export default withRouter(App);
