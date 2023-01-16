import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import AuthContext from '../../../../resources/auth-context';
import logo from './images/logo.png';


const Header = () => {
   const authCtx = useContext(AuthContext);

   const isLoggedIn = authCtx.isLoggedIn;
   const userType = authCtx.userType;
   const currentUrl = window.location.pathname;
   console.log('currentUrl ' + currentUrl);

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
      <header className={classes.header}>
         <Link exact className={classes.logo} to="/">
            <img src={logo} alt="All Home Desire" className={classes.logoOnPage} />
         </Link>
         {(userType != 'Employee') & isLoggedIn && (
            <div className={classes.headerRight}>
               <Link exact className={(currentUrl === '/') && (classes.active)} onClick={toggleClass} to={'/'}> Dashboard </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/') && (classes.active)} to={'/property'}> Property </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/') && (classes.active)} to={'/profile'}> Profile </Link>

               <Link onClick={logoutHandler} className={(currentUrl === '/') && (classes.active)} to={'/logout'}> Logout </Link>
            </div>
         )}
         {(userType === 'Employee') & isLoggedIn && (
            <div className={classes.headerRight}>
               <Link exact className={(currentUrl === '/') && (classes.active)} onClick={toggleClass} to={'/'}> Dashboard </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/property') && (classes.active)} to={'/property'}> Property </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/services') && (classes.active)} to={'/services'}> Services </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/users') && (classes.active)} to={'/users'}> Users </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/paymentmethods') && (classes.active)} to={'/paymentmethods'}> Payment Methods </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/subscriptionmethods') && (classes.active)} to={'/subscriptionmethods'}> Subscription Methods </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/reports') && (classes.active)} to={'/reports'}> Reports </Link>

               <Link onClick={toggleClass} className={(currentUrl === '/profile') && (classes.active)} to={'/profile'}> Profile </Link>

               <Link onClick={logoutHandler} className={(currentUrl === '/logout') && (classes.active)} to={'/logout'}> Logout </Link>
            </div>
         )}
      </header>
   )
}
export default Header
