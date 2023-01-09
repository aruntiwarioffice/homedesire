import React, { useEffect } from 'react';

import InteriorDesignContent from '../../components/common/content/Services/InteriorDesign/Content';

const InteriorDesign = () => {
  useEffect(() => {
    document.title = "Interior Design";
  }, []);

  return <InteriorDesignContent />;
};

export default InteriorDesign;
