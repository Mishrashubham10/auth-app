import { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className="contact" onSubmit={submitHandler}>
      <div className="contactContainer">
        <h1 className="contactTitle">Contact Us</h1>
        <div className="contactSec">
          <label className="contactLabel" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            placeholder="email..."
            className="contactInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <label className="contactLabel" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            placeholder="password..."
            className="contactInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>
        <button className="contactBtn">Send</button>
      </div>
    </form>
  );
};

export default Contact;