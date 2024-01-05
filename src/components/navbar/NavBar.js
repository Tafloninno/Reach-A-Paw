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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      toggleNav();
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Reach A Paw </h1>
      </div>

      <ul className={`nav-links ${nav ? 'active' : ''}`}>
        {links.map(({ id, link }) => (
          <li key={id} className="nav-link">
            <Link to={link} smooth duration={500} tabIndex={0} onKeyDown={handleKeyDown}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <button type="button" className="menu-icon" onClick={toggleNav} onKeyDown={handleKeyDown}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>

      {nav && (
        <ul className="mobile-menu">
          {links.map(({ id, link }) => (
            <li key={id} className="mobile-link">
              <Link
                onClick={toggleNav}
                to={link}
                smooth
                duration={500}
                tabIndex={0}
                onKeyDown={handleKeyDown}
              >
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
