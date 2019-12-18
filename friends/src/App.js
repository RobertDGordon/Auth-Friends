import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import { getToken } from './utils/axiosWithAuth';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/Login';
import Logout from './components/Logout';
import Account from './components/Account';
import Home from './components/Home';
import './App.css';

import styled from 'styled-components';

const MainDiv = styled.div`
  background-image: url('../img/smurfbg.jpeg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  /* border: 1px solid red; */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
  #logo{
    width: 600px;
    margin-top: 10px;
  }
  nav{
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
`

const NavContainer = styled.div `
  display: flex;
  width: 20%;
  margin-right: 15px;
  justify-content: space-between;
  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    &:hover{
      color: lightblue;
    }
  }
`

const ContentDiv = styled.div `
  display: flex;
  width: 99%;
  height: 99%;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: center;
`

function App() {

  const signedIn = getToken()

  return (
    <MainDiv>
      <nav>
      <NavContainer>
        <Link to='/'>Home</Link>
        {!signedIn && <Link to='/login'>Login</Link>}
        {signedIn && <Link to='/account'>Account</Link>}
        {signedIn && <Link to='/logout'>Logout</Link>}
      </NavContainer>
      </nav>
      <img id='logo' src='../img/smurflogo.png' alt='Smurfs Logo' />
      <ContentDiv>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
        <PrivateRoute exact path='/account' component={Account} />
        <PrivateRoute exact path='/logout' component={Logout} />
      </ContentDiv>
    </MainDiv>
  );
}

export default withRouter(App);
