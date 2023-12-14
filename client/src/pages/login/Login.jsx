import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8800/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    console.log(data);
    navigate('/');
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <h1>Login with Us</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;