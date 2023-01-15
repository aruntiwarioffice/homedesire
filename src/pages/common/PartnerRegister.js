import React, { useEffect } from 'react';

import PartnerRegisterContent from '../../components/common/content/PartnerRegister/Content';

const PartnerRegister = () => {
  useEffect(() => {
    document.title = "Partner Register";
  }, []);

  return <PartnerRegisterContent />;
};

export default PartnerRegister;
