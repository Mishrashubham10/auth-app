import { useState } from 'react';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await fetch('http://localhost:8800/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form className="register" onSubmit={submitHandler}>
      <h1>Register with Us</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username..."
        onChange={(e)=>setUsername(e.target.value)}
        value={username}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email..."
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        required
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        onChange={(e)=>setPassword(e.target.value)}
        value={password}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
