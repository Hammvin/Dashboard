import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { SidebarList } from './SidbarList';
import { IconContext } from 'react-icons';

const NavBar = () => {

  const [Sidebar, setSideBar] = useState(false);

  const showSidbar = () => setSideBar(!Sidebar)
  
  return (
    <>
      <IconContext.Provider value={{color:"#4F5A6D", size:"1.5em"}}>
        <div className="sidebar">
            <div className="navbar">
              <Link  className="menu-bars">
                <FaBars onClick={showSidbar}/>
              </Link>
            </div>
            <nav className={Sidebar ? 'nav-menu active' : 'nav-menu'}>
              <ul className="nav-menu-items" onClick={showSidbar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <FaBars/>
                  </Link>
                </li>
                {SidebarList.map((item, key) => {
                  return (
                    <li key={item.index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.name}</span>
                        
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
        </IconContext.Provider>
    </>
  )
}

export default NavBar