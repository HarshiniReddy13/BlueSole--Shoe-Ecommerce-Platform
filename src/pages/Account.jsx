// Account.jsx
import { useEffect, useState } from 'react';
import './Account.css'

function Account() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    setUsername(storedUsername || 'Guest');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('Guest');
  };

  return (
    <div className="account-page">
      <h1>Welcome, {username}!</h1>
      <p>This is your account dashboard.</p>
      {username !== 'Guest' && (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
}

export default Account;
