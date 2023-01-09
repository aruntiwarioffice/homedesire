import React, { useEffect } from 'react';

import ContactUsContent from '../../components/common/content/ContactUs/Content';

const ContactUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return <ContactUsContent />;
};

export default ContactUs;
