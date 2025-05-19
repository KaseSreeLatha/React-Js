import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [contactError, setContactError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [isAdmin, setIsAdmin] = useState(false); // State for admin checkbox
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        // Reset errors
        setNameError('');
        setEmailError('');
        setContactError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setSuccess('');

        // Validation
        let valid = true;
        if (!name.trim()) {
            setNameError('Name is required');
            valid = false;
        }

        if (!email.trim()) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Invalid email address');
            valid = false;
        }

        if (!contact.trim()) {
            setContactError('Contact number is required');
            valid = false;
        } else if (!/^\d{10}$/.test(contact)) {
            setContactError('Contact number must be 10 digits');
            valid = false;
        }

        if (!password.trim()) {
            setPasswordError('Password is required');
            valid = false;
        }

        if (!confirmPassword.trim()) {
            setConfirmPasswordError('Please confirm password');
            valid = false;
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
            valid = false;
        }

        if (valid) {
            try {
                // Check if user with the same email already exists
                const response = await axios.get(`http://localhost:3000/users?email=${email}`);
                if (response.data.length > 0) {
                    setEmailError('User with this email already exists');
                } else {
                    // Construct user object with isAdmin property
                    let obj = {
                        name: name,
                        email: email,
                        contact: contact,
                        password: password,
                        isAdmin: isAdmin // Set isAdmin based on checkbox state
                    };
                    // If user does not exist, register the user
                    await axios.post("http://localhost:3000/users", obj);
                    setSuccess('Registered successfully');
                    navigate('/careers');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            Registration
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                {/* Form fields... */}

                                <div className="form-group">
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${nameError && 'is-invalid'}`}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {nameError && <div className="invalid-feedback">{nameError}</div>}
                                </div>
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
                                    <label>Contact:</label>
                                    <input
                                        type="text"
                                        className={`form-control ${contactError && 'is-invalid'}`}
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                    />
                                    {contactError && <div className="invalid-feedback">{contactError}</div>}
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
                                <div className="form-group">
                                    <label>Confirm Password:</label>
                                    <input
                                        type="password"
                                        className={`form-control ${confirmPasswordError && 'is-invalid'}`}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                    />
                                    {confirmPasswordError && <div className="invalid-feedback">{confirmPasswordError}</div>}
                                </div>
                                <div className="form-group">
                                    <div className="form-check">
                                        <input
                                            type="checkbox"
                                            className="form-check-input"
                                            id="isAdminCheckbox"
                                            checked={isAdmin}
                                            onChange={() => setIsAdmin(!isAdmin)}
                                        />
                                        <label className="form-check-label" htmlFor="isAdminCheckbox">
                                            If you are Admin? Then click here
                                        </label>
                                    </div>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2">Register</button>
                                    <button type="button" className="btn btn-secondary" onClick={() => navigate('/login')} style={{ marginLeft: '10px' }}>Login</button>
                                
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

export default Registration;
