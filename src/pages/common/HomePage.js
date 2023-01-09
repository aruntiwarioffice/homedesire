import React, { useEffect } from 'react';

import HomeContent from '../../components/common/content/Home/Content';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <HomeContent />;
};

export default HomePage;
