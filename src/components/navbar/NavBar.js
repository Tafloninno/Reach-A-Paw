import React from 'react'
import './navBar.css'
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';



function NavBar() {
  const links = [
    {
      id: 1,
      link: "Home"
    },
    {
      id: 1,
      link: "About"
    },
    {
      id: 1,
      link: "Programs"
    },
    {
      id: 1,
      link: "Volunteer"
    },
    {
      id: 1,
      link: "Donate"
    }
  ]
  return (
    <div className='nav-container'>
         <nav>
            <a href="#" className="logo">
                Rach A Paw
            </a>
            <div class="humburger_menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>


            <ul className='mobile_menu'>
              {links.map(({ id, link }) => (
                <li
                  key={id}
                  className='nav_link'
                >
                  <Link to={link} smooth duration='500'>{link}</Link>
                </li>
              ))}
            </ul>
        </nav>
    </div>
    
  )
}

export default NavBar
