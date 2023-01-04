import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
import logo from '../../images/header/logo.png';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

const Header = () => {
   const [isMenu, setisMenu] = useState(false);
   const [isResponsiveclose, setResponsiveclose] = useState(false);
   const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
   };
   let boxClass = ["main-menu menu-right menuq1"];
   if (isMenu) {
      boxClass.push('menuq2');
   } else {
      boxClass.push('');
   }
   const [isMenuSubMenu, setMenuSubMenu] = useState(false);
   const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
   };
   let boxClassSubMenu = ["sub__menus"];
   if (isMenuSubMenu) {
      boxClassSubMenu.push('sub__menus__Active');
   } else {
      boxClassSubMenu.push('');
   }
   return (
      <>
         <header className="site-header-onepage bg-dark-1 is-fixed-">
            <div className="octf-main-header">
               <div className="octf-area-wrap">
                  <div className="container octf-mainbar-container">
                     <div className="octf-mainbar">
                        <div className="octf-mainbar-row octf-row">
                           <div className="octf-col logo-col">
                              <div id="site-logo" className="site-logo">
                                 <Link exact activeClassName='is-active' to="/">
                                    <img src={logo} alt="All Home Desire" className="logo-onepage" />
                                 </Link>
                              </div>
                           </div>
                           <div className="octf-col menu-col no-padding">
                              <nav className="main-nav " >
                                 {isResponsiveclose === true ? <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                                       <FiXCircle />
                                    </span>
                                 </> : <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >
                                       <FiAlignRight />
                                    </span>
                                 </>}
                                 <ul className={boxClass.join(' ')}>
                                    <li className="menu-item" >
                                       <Link exact activeClassName='is-active' onClick={toggleClass} to={'/'}> HOME </Link>
                                    </li>
                                    <li className="menu-item " >
                                       <Link onClick={toggleClass} activeClassName='is-active' to={'/about'}> ABOUT US </Link>
                                    </li>
                                    <li className="menu-item " >
                                       <Link onClick={toggleClass} activeClassName='is-active' to={'/property'}> PROPERTY </Link>
                                    </li>
                                    <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" >
                                       <Link to="javascript:void()">
                                       SERVICES
                                       <FiChevronDown />
                                       </Link>
                                       <ul className={boxClassSubMenu.join(' ')} >
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/interiordesign'}> Interior Design </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/add-user'}> Add User </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/user-details'}> User Details </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/edit-user'}> Edit User </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/user-list'}> User List </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/dashboard'}> Dashboard </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/help'}> Help </Link>
                                          </li>
                                          <li>
                                             <Link onClick={toggleClass} activeClassName='is-active' to={'/users'}> Users</Link>
                                          </li>
                                       </ul>
                                    </li>
                                    <li className="menu-item " >
                                       <Link onClick={toggleClass} activeClassName='is-active' to={'/contact'}> CONTACT US </Link>
                                    </li>
                                    <li className="menu-item ">
                                       <Link onClick={toggleClass} activeClassName='is-active' to={'/login'}> LOGIN </Link>
                                    </li>

                                 </ul>
                              </nav>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
      </>
   )
}
export default Header
