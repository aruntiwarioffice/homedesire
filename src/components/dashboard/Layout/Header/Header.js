import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";

import AuthContext from '../../../../resources/auth-context';
import './Style.css';
import logo from './images/logo.png';


const Header = () => {
   const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

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
                                 {isLoggedIn && (
                                 <ul className={boxClass.join(' ')}>
                                    <li className="menu-item" >
                                       <Link exact activeClassName='is-active' onClick={toggleClass} to={'/'}> Dashboard </Link>
                                    </li>
                                    <li className="menu-item " >
                                       <Link onClick={toggleClass} activeClassName='is-active' to={'/profile'}> Profile </Link>
                                    </li>
                                    <li className="menu-item ">
                                       <Link onClick={logoutHandler} activeClassName='is-active' to={'/logout'}> Logout </Link>
                                    </li>
                                 </ul>
                                 )}
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
