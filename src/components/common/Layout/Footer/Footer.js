import React from 'react';
import { Link } from 'react-router-dom';
import './Style.css';
import logo from './images/logo.png';
// import { Link} from 'react-router-dom';
const Footer = props => {
    // const [isMenu, setisMenu] = useState(false);
    // const [isResponsiveclose, setResponsiveclose] = useState(false);
    // const toggleClass = () => {
    //     setisMenu(isMenu === false ? true : false);
    //     setResponsiveclose(isResponsiveclose === false ? true : false);
    // };
    // let boxClass = ["main-menu menu-right menuq1"];
    // if (isMenu) {
    //     boxClass.push('menuq2');
    // } else {
    //     boxClass.push('');
    // }
    // const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    // const toggleSubmenu = () => {
    //     setMenuSubMenu(isMenuSubMenu === false ? true : false);
    // };
    // let boxClassSubMenu = ["sub__menus"];
    // if (isMenuSubMenu) {
    //     boxClassSubMenu.push('sub__menus__Active');
    // } else {
    //     boxClassSubMenu.push('');
    // }
    return (
        <>


            <footer id="site-footer" className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                            <div className="widget-footer">
                                <img src={logo} className="footer-logo" alt="" />
                                <p>All Home Desire is a reputable real estate firm. The firm specializes in offering customers the most up-to-date construction and dealing information. In addition, we provide satisfying interior design solutions.</p>
                                <div className="footer-social list-social">
                                    {/* <ul>
                                        <li><a href="https://www.facebook.com/allhomedesire" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="https://twitter.com/AllHomeDesire" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.instagram.com/allhomedesire/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCibm1tmQqOLYxx1QDqvgxUg/featured" target="_blank" rel="noopener noreferrer"><i className="fa fa-youtube"></i></a></li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-md-0">
                            <div className="widget-footer widget-contact">
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><Link to={'/'}>Home</Link></li>
                                    <li><Link to={'/about-us'}>About us</Link></li>
                                    <li><Link to={'/interiordesign'}>Interior Design</Link></li>
                                    <li><Link to={'/property'}>Property</Link></li>
                                    <li><Link to={'/contact'}>Contact us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12 mb-4 mb-xl-0">
                            <div className="widget-footer">
                                <h6>Contact us</h6>
                                <ul className="footer-list">
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="fa fa-map-marker"></i></span>
                                        <span className="list-item-text">7th Avenue Gaur City 1, Noida Extension</span>
                                    </li>
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="fa fa-envelope-open"></i></span>
                                        <span className="list-item-text">allhomedesire@gmail.com</span>
                                    </li>
                                    <li className="footer-list-item">
                                        <span className="list-item-icon"><i className="fa fa-phone"></i></span>
                                        <span className="list-item-text">+91 9818961783</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                            <div className="widget-footer footer-widget-subcribe">
                                <h6>Subscribe</h6>
                                <form className="mc4wp-form" method="post">
                                    <div className="mc4wp-form-fields">
                                        <div className="subscribe-inner-form">
                                            <input type="email" name="EMAIL" placeholder="YOUR EMAIL" required="" />
                                            <button type="submit" className="subscribe-btn-icon"><i className="ot-flaticon-send"></i></button>
                                        </div>
                                    </div>
                                </form>
                                <p>Follow our newsletter to stay updated about agency.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
                            <p>Copyright © 2021 Theratio by <a className="text-light" >ThemeModern</a>. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-5 col-md-12 align-self-center">
                            <ul className="icon-list-items inline-items justify-content-lg-end">
                                <li className="icon-list-item inline-item">
                                    <a ><span className="icon-list-text">Terms of use</span></a>
                                </li>
                                <li className="icon-list-item inline-item">
                                    <a><span className="icon-list-text">Privacy Environmental Policy</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}




        </>
    );
};

export default Footer;
