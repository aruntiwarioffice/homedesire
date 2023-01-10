import React, { useState } from 'react';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={classes.footerDark}>
            <div className={classes.container}>
                <p className={classes.copyright}>All Home Desire © 2023</p>
            </div>
        </footer>
    );
};

export default Footer;
