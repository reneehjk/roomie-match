/* import React, { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.Module.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result);
                if (result.data === "Login successful") {
                    navigate('/explore'); 
                } else {
                    setErrorMessage('Invalid email or password');
                }
            })
            .catch(err => {
                console.log(err);
                setErrorMessage('Failed to login');
            });
    }

    return (
        <div className={styles['login-container']}>
            <form className={styles['login-form']} onSubmit={handleSubmit}>
                <h1 className={styles['login-title']}>Login</h1>
                {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
                <div className={styles['form-group']}>
                    <label>Email:</label>
                    <input
                        type="email"
                        className={styles['input-field']}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles['form-group']}>
                    <label>Password:</label>
                    <input
                        type="password"
                        className={styles['input-field']}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className={styles['form-group']}>
                    <Link to="/explore" className={styles['submit-btn']}>Login</Link>
                </div>
            </form>
        </div>
    );
}

export default Login; */

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.Module.css'; 

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/explore'); 
    }

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h1 className="login-title">Login</h1>

                <div className="form-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="input-field"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input
                        type="password"
                        className="input-field"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="submit-btn">Login</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
