import React, { useEffect } from 'react';

import AboutUsContent from '../../components/common/AboutUs/Content';

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us";
  }, []);

  return <AboutUsContent />;
};

export default AboutUs;
