import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
 
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
 
    const [cookies, setCookie] = useCookies(['userData','login']);
 
    const handleLogin = () => {
        if (!username.trim() || !password.trim()) {
            setErrorMessage('Please enter both username and password.');
            return;
        }
 
        const isAuthenticated = true;
 
        if (isAuthenticated) {
            //console.log(cookies.userData)
            if(cookies.userData===undefined)
            {
                setCookie('userData', { username, password }, { path: '/' });
                navigate('/popup');
            }
            if (cookies.userData.username===username && cookies.userData.password===password) {
                setCookie('login', 'true', { path: '/' });
            }else{
                setCookie('login', 'false', { path: '/' });
            }
            setCookie('userData', { username, password }, { path: '/' });
            navigate('/popup');
        }
    };
 
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="border rounded-lg p-8 bg-white">
                <h1 className="text-3xl font-bold underline mb-4 text-center">Login</h1>
                <div className="login-form">
                    <input
                        className="w-full px-4 py-2 mb-4 border rounded-lg"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        className="w-full px-4 py-2 mb-4 border rounded-lg"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    {errorMessage && (
                        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                    )}
                </div>
            </div>
        </div>
    );
    
};
 
export default Login;