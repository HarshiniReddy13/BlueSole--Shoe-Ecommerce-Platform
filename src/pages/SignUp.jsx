// SignUp.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Added useNavigate
import './SignUp.css';

function SignUp() {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [terms, setTerms] = useState(false);
  const [errors, setErrors] = useState({});

  const navigate = useNavigate(); // Initialized navigate

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

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
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
      isValid = false;
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm Password is required';
      isValid = false;
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    if (!dob) {
      newErrors.dob = 'Date of Birth is required';
      isValid = false;
    }

    if (!gender) {
      newErrors.gender = 'Please select your gender';
      isValid = false;
    }

    if (!terms) {
      newErrors.terms = 'You must agree to the terms and conditions';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      localStorage.setItem('username', userName);
      console.log('Form submitted successfully!', { userName, email, password });
      
      // Reset all fields after submission
      setName('');
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setDob('');
      setGender('');
      setTerms(false);
      setErrors({});
      
      navigate('/'); // Navigate to home page
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div className="x">
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            placeholder="full name"
            id="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="UserName">User Name:</label>
          <input
            type="text"
            placeholder="user name"
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

        <div>
          <label htmlFor="cpassword">Confirm Password:</label>
          <input
            type="password"
            placeholder="8 characters"
            id="cpassword"
            minLength="8"
            maxLength="8"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
        </div>

        <div>
          <label htmlFor="dob">Date Of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
          {errors.dob && <p className="error-message">{errors.dob}</p>}
        </div>

        <div>
          <label htmlFor="gender">Gender:</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="m"
            className="g"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="m">Male</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="f"
            className="g"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="f">Female</label>
        </div>

        <div>
          <input
            type="radio"
            name="gender"
            id="other"
            className="g"
            value="other"
            checked={gender === 'other'}
            onChange={(e) => setGender(e.target.value)}
          />
          <label htmlFor="other">Other</label>
          {errors.gender && <p className="error-message">{errors.gender}</p>}
        </div>

        <div>
          <input
            type="checkbox"
            id="cb"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <label htmlFor="cb">I agree to the terms and conditions</label>
          {errors.terms && <p className="error-message">{errors.terms}</p>}
        </div>

        <button type="submit" className="h8">Register</button>

        <div>
          <p>
            Already have an account?{' '}
            <Link to="/signin">
              <button className="head8">
                <b>Login</b>
              </button>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
