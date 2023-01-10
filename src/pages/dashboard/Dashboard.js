import React, { useEffect, useContext } from 'react';
import AuthContext from '../../resources/auth-context';
import CustomerDashboard from '../../components/dashboard/Customer/Dashboard/Content';
import EmployeeDashboard from '../../components/dashboard/Employee/Dashboard/Content';
import PartnerDashboard from '../../components/dashboard/Partner/Dashboard/Content';

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const userType = authCtx.userType;
  console.log('userType ' + userType);
  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  {
    if (userType === 'Customer') { return <CustomerDashboard /> }
    if (userType === 'Employee') { return <EmployeeDashboard /> }
    if (userType === 'Partner') { return <PartnerDashboard /> }
  }
};

export default Dashboard;
