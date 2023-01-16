import classes from './Content.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
const ContactUsContent = () => {
  return (
    <section className={classes.starting}>
      <div className="site-content">
                <div className="page-header dtable text-center header-transparent page-header-contact">
                    <div className="dcell">
                        <div className="container">
                            <h1 className="page-title">Contact Us</h1>
                            <ul id="breadcrumbs" className="breadcrumbs none-style">
                                <li><Link exact to="/">Home</Link></li>
                                <li className="active">Contact Us</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            <section className="contact-page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center mb-5 mb-lg-0">
                            <div className="contact-left">
                                <h2>Get in Touch</h2>
                                <p className="font14">Your email address will not be published. Required fields are marked *</p>
                                <form method="post" action="" className="wpcf7">
                                    <div className="main-form">
                                        <p>
                                            <label for="name"> <span className="error" id="err-name">please enter name</span></label>
                                            <input type="text" name="name" value="" size="40" className="" aria-invalid="false" placeholder="Your Name *" required="" />
                                        </p>
                                        <p>
                                            <label for="email">
                                                <span className="error" id="err-email">please enter e-mail</span>
                                                <span className="error" id="err-emailvld">e-mail is not a valid format</span>
                                            </label>
                                            <input type="email" name="email" id="email" value="" size="40" className="" aria-invalid="false" placeholder="Your Email *" required="" />
                                        </p>
                                        <p>
                                            <label for="message"></label>
                                            <textarea name="message" id="message" cols="40" rows="10" className="" aria-invalid="false" placeholder="Message..." required=""></textarea>
                                        </p>
                                        <p><button type="submit" id="send" className="octf-btn">Send Message</button></p>
                                        <div className="clear"></div>
                                        <div className="error" id="err-form">There was a problem validating the form please check!</div>
                                        <div className="error" id="err-timedout">The connection to the server timed out!</div>
                                        <div className="error" id="err-state"></div>
                                    </div>
                                </form>

                                <div className="clear"></div>
                                <div id="ajaxsuccess">Successfully sent!!</div>
                                <div className="clear"></div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="contact-right">
                                <div className="ot-heading">
                                    <span>[ our contact details ]</span>
                                    <h2 className="main-heading"> Let's Start a Project</h2>
                                </div>
                                <p>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                                <div className="contact-info">
                                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                                    <div className="info-text">
                                        <h6>OUR ADDRESS:</h6>
                                        <p>7th Avenue Gaur City 1, Noida Extension</p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <i className="fa fa-envelope"></i>
                                    <div className="info-text">
                                        <h6>OUR MAILBOX:</h6>
                                        <p><a href="mailto:allhomedesire@gmail.com">allhomedesire@gmail.com</a></p>
                                    </div>
                                </div>
                                <div className="contact-info">
                                    <i className="fa fa-volume-control-phone"></i>
                                    <div className="info-text">
                                        <h6>OUR PHONE:</h6>
                                        <p><a href="tel:+91 9818961783">+91 9818961783</a></p>
                                    </div>
                                </div>
                                <div className="list-social">
                                    <ul>
                                        <li><a href="https://twitter.com/AllHomeDesire" target="_self"><i className="fa fa-twitter"></i></a></li>
                                        <li><a href="https://www.facebook.com/allhomedesire" target="_self"><i className="fa fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.youtube.com/channel/UCibm1tmQqOLYxx1QDqvgxUg/featured" target="_self"><i className="fa fa-youtube"></i></a></li>
                                        <li><a href="https://www.instagram.com/allhomedesire/" target="_self"><i className="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="contact-map">
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86077.66255184308!2d-122.40402224079803!3d47.60810999586645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab3f905c4b1%3A0x96bf575ff75ab1aa!2s411%20University%20St%2C%20Seattle%2C%20WA%2098101%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1584084043716!5m2!1svi!2s" allowfullscreen="" aria-hidden="false" tabindex="0" height="522"></iframe>
                </div>
            </div>
    </section>
  );
};

export default ContactUsContent;
