import React, { useEffect } from 'react';

import EnquiryNowContent from '../../components/common/EnquiryNow/Content';

const EnquiryNow = () => {
  useEffect(() => {
    document.title = "Enquiry Now";
  }, []);

  return <EnquiryNowContent />;
};

export default EnquiryNow;
