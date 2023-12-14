import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <h1 className='heading'>
          <Link to="/">Auth</Link>
        </h1>
        <div className="navItems">
          <Link to="/" className='navItem'>
            <li>Home</li>
          </Link>
          <Link to="/projects" className='navItem'>
            <li>Projects</li>
          </Link>
          <Link to="/contact" className='navItem'>
            <li>Contact</li>
          </Link>
          <Link to="/register" className='navItem'>
            <li>Register</li>
          </Link>
          <Link to="/login" className='navItem'>
            <li>Login</li>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;