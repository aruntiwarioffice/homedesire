import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeeSubscriptionMethods from '../../components/dashboard/Employee/SubscriptionMethods/Content';

const SubscriptionMethods = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Subscription Methods";
  }, []);

  return <EmployeeSubscriptionMethods />;
};

export default SubscriptionMethods;
