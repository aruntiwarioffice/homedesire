import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import EmployeeUsers from '../../components/dashboard/Employee/Users/Content';

const Users = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Users";
  }, []);

  return <EmployeeUsers />;
};

export default Users;
