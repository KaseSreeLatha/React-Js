// LoginPage.js

import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import HomePage from './HomePage';
import Popup from './Popup';
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [cookies, setCookie] = useCookies(['userData']);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isFirstLogin, setIsFirstLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const nav = useNavigate('')

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    const isAuthenticated = true;

    if (isAuthenticated) {
      if (
        !cookies.userData ||
        cookies.userData.username !== username ||
        cookies.userData.password !== password
      ) {
        setIsFirstLogin(true);
        setCookie('userData', { username, password }, { path: '/' });
        setCookie('firstLogin', true, { path: '' });
      } else {
        setIsFirstLogin(false);
      }
      setIsLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      console.log('Authentication failed');
    }

    nav('/main')
    
  };

  const handleClosePopup = () => {
    setIsFirstLogin(false);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          /><br/>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br/><br/>
          <button onClick={handleLogin}>Login</button>
          {errorMessage && (
            <p className="error-message">{errorMessage}</p>
          )}
        </div>
      </div>
      {isLoggedIn && isFirstLogin && <Popup onClose={handleClosePopup} />}
      {isLoggedIn && <HomePage isFirstLogin={isFirstLogin} />}
    </div>
  );
};

export default LoginPage;
