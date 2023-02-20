import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data';

const Navbar = () => {
  const  {openSideBar, openSubMenu, closeSubMenu } = useGlobalContext();

  const displaySubmenu = (e) => {
    const page = e.target.id;    
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubMenu(page, { center, bottom })
  }  

  const handleSubMenu = (e) => {
    if (!e.target.classList.contains('link-btn')) { closeSubMenu() };
  }
  
  return (
    <nav className="nav" onMouseOver={handleSubMenu}>
      <div className="nav-center">
        <div className="nav-header">
            <img src={logo} alt="logo stripe" className='nav-logo' />
            <button className="btn toggle-btn" onClick={openSideBar}>
              <FaBars />
            </button>
        </div>
        <ul className="nav-links">
          {sublinks.map( (item, index) => { 
            return <li key={index}>
              <button className="link-btn" id={item.page} onMouseOver={displaySubmenu}>{item.page}</button>
            </li>
          })}          
        </ul>
        <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
