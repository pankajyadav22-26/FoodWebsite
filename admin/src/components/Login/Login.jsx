import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctPassword = process?.env?.VITE_ADMIN_PASSWORD || '';

        if (password === correctPassword) {
            onLogin();
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">Admin Login</h2>
                <div className="password-container">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="login-input"
                    />
                    <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? '👁️' : '👁️'}
                    </button>
                </div>
                <button type="submit" className="login-button">
                    Login
                </button>
                {error && <p className="login-error">{error}</p>}
            </form>
        </div>
    );
};

export default Login;