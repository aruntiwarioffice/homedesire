import React, { useEffect } from 'react';

import AboutUsContent from '../../components/common/content/AboutUs/Content';

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return <AboutUsContent />;
};

export default AboutUs;
