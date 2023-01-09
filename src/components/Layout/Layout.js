import { Fragment } from 'react';
import { useContext } from 'react';

import CommonLayout from "../common/Layout/Layout";
import DashboardLayout from "../dashboard/Layout/Layout";
import AuthContext from '../../resources/auth-context';

const Layout = (props) => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <Fragment>
      {!isLoggedIn && (
        <CommonLayout>
          <main>{props.children}</main>
        </CommonLayout>
      )}
      {isLoggedIn && (
        <DashboardLayout>
          <main>{props.children}</main>
        </DashboardLayout>
      )}

    </Fragment>
  );
};

export default Layout;
