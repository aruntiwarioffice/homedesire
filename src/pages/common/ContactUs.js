import React, { useEffect } from 'react';

import ContactUsContent from '../../components/common/content/ContactUs/Content';

const ContactUs = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  return <ContactUsContent />;
};

export default ContactUs;
