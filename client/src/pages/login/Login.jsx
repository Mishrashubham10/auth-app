import { useState } from 'react';
import './login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className="login" onSubmit={submitHandler}>
      <h1>Login with Us</h1>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        placeholder="username..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button>Login</button>
    </form>
  );
};

export default Register;