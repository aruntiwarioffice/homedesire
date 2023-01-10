import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeeServices from '../../components/dashboard/Employee/Services/Content';

const Services = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Services";
  }, []);

  return <EmployeeServices />;
};

export default Services;
