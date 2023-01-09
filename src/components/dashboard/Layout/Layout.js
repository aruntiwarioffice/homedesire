import { Fragment } from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const DashboardLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default DashboardLayout;
