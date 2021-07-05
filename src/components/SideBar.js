import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import SideBarData from './SideBarData';
import { IconContext } from 'react-icons';

import './SideBar.css';

const SideBar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <div className='sidebar'>
        <Link to='#' className='menu-bars'>
          <FaBars onClick={showSidebar}></FaBars>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='sidebar-toggle'>
            <Link to='#' className='menu-bars'>
              <AiOutlineClose></AiOutlineClose>
            </Link>
          </li>

          {SideBarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
};

export default SideBar;
