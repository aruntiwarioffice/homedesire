import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeeReports from '../../components/dashboard/Employee/Reports/Content';

const Reports = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Reports";
  }, []);

  return <EmployeeReports />;
};

export default Reports;
