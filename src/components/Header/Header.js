import './Header.css';
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <header className="header">
        <div className="container">
          <nav className="navbar">
            <a className="brand">
              Logo
            </a>
            <span className="overlay" id="overlay"></span>
            <div className="menu" id="menu">
              <ul>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blog">Blog</Link>
              </ul>
            </div>
          </nav>
        </div>
      </header>
      </>
    );
  }
  
  export default Header;