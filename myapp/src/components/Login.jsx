import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    let [data,setData]=useState([])
    const navigate = useNavigate();
    const [success, setSuccess] = useState('');

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>{
            setData(res.data)
        })
    },[])

    const handleLogin = (e) => {
        e.preventDefault();
        // Reset errors
        setEmailError('');
        setPasswordError('');
        
        // Validation
        let valid = true;
        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (valid) {
            data.map((x)=>{
                if(x.email==email && x.password==password){
                    navigate(`/details/${x.id}`)
                }
                else{
                    setSuccess('invalid credentials')
                }
            })
            
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Login
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        className={`form-control ${emailError && 'is-invalid'}`}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {emailError && <div className="invalid-feedback">{emailError}</div>}
                                </div>
                                <div className="form-group">
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        className={`form-control ${passwordError && 'is-invalid'}`}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    {passwordError && <div className="invalid-feedback">{passwordError}</div>}
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Login</button>
                                    <button type="button" className="btn btn-success" onClick={() => navigate('/register')} style={{ marginLeft: '10px' }}>Register</button>
                                    <div>{success}</div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
