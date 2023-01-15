import React, { useEffect } from 'react';

import EnquiryNowContent from '../../components/common/content/EnquiryNow/Content';

const EnquiryNow = () => {
  useEffect(() => {
    document.title = "Enquiry Now";
  }, []);

  return <EnquiryNowContent />;
};

export default EnquiryNow;
