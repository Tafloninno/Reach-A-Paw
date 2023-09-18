import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import './navBar.css';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'about',
    },
    {
      id: 3,
      link: 'portfolio',
    },
    {
      id: 4,
      link: 'Experience',
    },
    {
      id: 5,
      link: 'contact',
    },
  ];

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Reach A Paw </h1>
      </div>

      <ul className={`nav-links ${nav ? 'active' : ''}`}>
        {links.map(({ id, link }) => (
          <li key={id} className="nav-link">
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div className="menu-icon" onClick={() => setNav(!nav)}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="mobile-menu">
          {links.map(({ id, link }) => (
            <li key={id} className="mobile-link">
              <Link onClick={toggleNav} to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
