import React, { useState } from 'react'
import Logo from './Logo';
import Sidebar from './Sidebar';

const Navbar = () => {
    const [logoTitle, setLogoTitle] = useState("DashBoard");
    const handleNavbarClick = (title)=>{
        setLogoTitle(title)
    }
  return (
    <div className="navbar">
        <header className='header'>
        <nav className="nav">
            <Logo title={logoTitle} />
            <ul className="nav-list">
                <li className="nav-item"><i className="bx bx-search-alt"></i></li>
                <li className="nav-item"><i className="bx bx-bookmark"></i></li>
                <li className="nav-item"><i className="bx bx-cog"></i></li>
                <li className="nav-item"><i className="bx bx-menu"></i></li>
            </ul>
        </nav>
    </header>
    <Sidebar OnItemClick={handleNavbarClick} />
    </div>
  )
}

export default Navbar;
