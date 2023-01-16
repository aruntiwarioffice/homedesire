import React, { useEffect } from 'react';

import CustomerLogin from '../../components/common/Login/Customer/Content';
import EmployeeLogin from '../../components/common/Login/Employee/Content';
import PartnerLogin from '../../components/common/Login/Partner/Content';

const Login = (props) => {
  useEffect(() => {
    document.title = "Login";
  }, []);

  {
    if (props.type === 'Customer') { return <CustomerLogin /> }
    if (props.type === 'Employee') { return <EmployeeLogin /> }
    if (props.type === 'Partner') { return <PartnerLogin /> }
  }
};

export default Login;