import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeeProperty from '../../components/dashboard/Employee/Property/Content';
import CustomerProperty from '../../components/dashboard/Customer/Property/Content';
import PartnerProperty from '../../components/dashboard/Partner/Property/Content';

const AuthProperty = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Property";
  }, []);

  {
    if (userType === 'Customer') { return <CustomerProperty /> }
    if (userType === 'Employee') { return <EmployeeProperty /> }
    if (userType === 'Partner') { return <PartnerProperty /> }
  }
};

export default AuthProperty;
