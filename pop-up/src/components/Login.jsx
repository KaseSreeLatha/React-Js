import React, { useState, useEffect } from 'react';
import style from "./nav.module.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../images/log.jpg';

const Login = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3000/users')
      .then((res) => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const nameData = (e) => {
    setName(e.target.value);
  };

  const passwordData = (e) => {
    setPassword(e.target.value);
  };

  const formHandle = () => {
    if (!name || name.length < 8) {
      setNameError('Invalid username');
      return;
    } else {
      setNameError('');
    }

    if (!password) {
      setPasswordError('Invalid password');
      return;
    } else {
      setPasswordError('');
    }

    const existingUser = data.find(user => user.username === name);
    if (existingUser) {
      window.localStorage.setItem("value", false)
      navigate('/home');
      return;
    }

    axios.post('http://localhost:3000/users', { username: name, password: password })
      .then(() => {
        setData([...data, { username: name, password: password }]);
        window.localStorage.setItem("value", true)
        navigate('/home');
      })
      .catch(error => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className={style.loginPage}>
      <div className={style.loginBlock}>
        <h1>Login</h1>
        <div className={style.formContainer}>
          <div className={style.form}>
            <label> Username</label>
            <input value={name} onChange={nameData} />
            <p className={style.error}>{nameError}</p>

            <label> Password</label>
            <input type="password" value={password} onChange={passwordData} />
            <p className={style.error}>{passwordError}</p>

            <button id={style.submit} onClick={formHandle}> Login</button>
          </div>
          <div className={style.imageContainer}>
            <img className={style.loginImage} src={image} alt="Login Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
