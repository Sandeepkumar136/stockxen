import React, { useState } from 'react'
import Logo from './Logo';
import Sidebar from './Sidebar';
import { useNavToggle } from '../../Context/NavToggleContext';

const Navbar = () => {
    const [logoTitle, setLogoTitle] = useState("DashBoard");
    const {ToggleNavAndSide, isSidebar} = useNavToggle();
    const handleNavbarClick = (title)=>{
        setLogoTitle(title)
    }
  return (
        <header className='header'>
        <nav className="nav">
            <Logo title={logoTitle} />
            <ul className="nav-list">
                <li className="nav-item"><i className="bx bx-search-alt"></i></li>
                <li className="nav-item"><i className="bx bx-bookmark"></i></li>
                <li className="nav-item"><i className="bx bx-cog"></i></li>
                <li className="nav-item-toggle" onClick={ToggleNavAndSide} ><i className={`bx ${isSidebar? 'bx-x': 'bx-menu'}`}></i></li>
            </ul>
        </nav>
        <Sidebar OnItemClick={handleNavbarClick} />
    </header>
  )
}

export default Navbar;
