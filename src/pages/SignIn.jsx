//SignIn.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import './SignIn.css';

function SignIn() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const navigate = useNavigate();

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!userName.trim()) {
      newErrors.userName = 'User Name is required';
      isValid = false;
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length !== 8) {
      newErrors.password = 'Password must be 8 characters long';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      localStorage.setItem('username', userName); // Save username
      console.log('Form submitted successfully!', { userName, email, password });

      navigate('/');
      setUserName('');
      setEmail('');
      setPassword('');
      setErrors({});
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="p">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="UserName">User Name:</label>
          <input
            type="text"
            placeholder="full name"
            id="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          {errors.userName && <p className="error-message">{errors.userName}</p>}
        </div>
        <div>
          <label htmlFor="Email">Email:</label>
          <input
            type="email"
            placeholder="gmail id"
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="8 characters"
            id="password"
            minLength="8"
            maxLength="8"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        <div className="hk">
          <button className="head8" type="submit">Login</button>
          <div>
            <p>
              New to BlueSole?
              <Link to="/signup">
                <button className="head8">
                  <b>Sign Up</b>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
