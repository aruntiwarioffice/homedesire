import { Fragment } from 'react';

import Header from "./Header/Header";

const DashboardLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default DashboardLayout;
