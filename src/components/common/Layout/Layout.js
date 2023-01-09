import { Fragment } from 'react';

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const CommonLayout = (props) => {
  return (
    <Fragment>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default CommonLayout;
