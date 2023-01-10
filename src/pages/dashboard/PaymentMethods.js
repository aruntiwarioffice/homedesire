import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeePaymentMethods from '../../components/dashboard/Employee/PaymentMethods/Content';


const PaymentMethods = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Payment Methods";
  }, []);

  return <EmployeePaymentMethods />;
};

export default PaymentMethods;
