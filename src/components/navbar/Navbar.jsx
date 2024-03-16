import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="logo image" />
          <span>HomeRent</span>
        </a>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/agent">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <div className="userContainer">
              <img src="https://i.pravatar.cc/36" alt="avatar of user" />
              <span>John Doe</span>
            </div>
            <Link to="/profile" className="profileBtn">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/singin">Sing in</a>
            <a href="/singup" className="register">
              Sign up
            </a>
          </>
        )}

        <div className="menuIcon" onClick={() => setOpen(!open)}>
          <img src="/menu.png" alt="menu icon" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/agent">Agents</a>
          <a href="/signin">Sign In</a>
          <a href="/signup">Sign up</a>
        </div>
      </div>
    </nav>
  );
}
