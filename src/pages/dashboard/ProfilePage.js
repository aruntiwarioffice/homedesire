import React, { useEffect, useContext } from 'react';

import AuthContext from '../../resources/auth-context';
import CustomerProfile from '../../components/dashboard/Customer/Profile/Content';
import EmployeeProfile from '../../components/dashboard/Employee/Profile/Content';
import PartnerProfile from '../../components/dashboard/Partner/Profile/Content';

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Profile";
  }, []);

  {
    if (userType === 'Customer') { return <CustomerProfile /> }
    if (userType === 'Employee') { return <EmployeeProfile /> }
    if (userType === 'Partner') { return <PartnerProfile /> }
  }
};

export default Profile;
