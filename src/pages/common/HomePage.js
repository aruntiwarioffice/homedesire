import React, { useEffect } from 'react';

import HomeContent from '../../components/common/Home/Content';

const HomePage = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return <HomeContent />;
};

export default HomePage;
