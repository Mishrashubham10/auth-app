import { useState } from 'react';
import './register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className="register" onSubmit={submitHandler}>
      <h1>Register with Us</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        placeholder="email..."
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Register</button>
    </form>
  );
};

export default Register;