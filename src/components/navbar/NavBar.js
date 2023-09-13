import React from 'react'
import './navBar.css'

function NavBar() {
  return (
    <div className='nav-container'>
         <nav>
            <a href="#" class="logo">
                My Logo
            </a>
            <div class="humburger_menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>

            <ul class="mobile_menu">
                <li><a class="nav_link" href="#">portfolio</a></li>
                <li><a class="nav_link" href="#about">about</a></li>
                <li><a class="nav_link" href="#contact_id">contact</a></li>
            </ul>
        </nav>
    </div>
    
  )
}

export default NavBar
