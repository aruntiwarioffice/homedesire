import React, { useEffect } from 'react';

import AboutUsContent from '../../components/common/content/Property/Content';

const Property = () => {
  useEffect(() => {
    document.title = "Property";
  }, []);

  return <AboutUsContent />;
};

export default Property;
