import React, { useEffect } from 'react';

import CustomerRegister from '../../components/common/Register/Customer/Content';
import EmployeeRegister from '../../components/common/Register/Employee/Content';
import PartnerRegister from '../../components/common/Register/Partner/Content';
import RegisterContent from '../../components/common/Register/Content';

const Register = (props) => {
  useEffect(() => {
    document.title = "Register";
  }, []);

  //return <RegisterContent />
   {
     if (props.type === 'Customer') { return <CustomerRegister /> }
     if (props.type === 'Employee') { return <EmployeeRegister /> }
     if (props.type === 'Partner') { return <PartnerRegister /> }
   }
};

export default Register;