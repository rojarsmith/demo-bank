import { Fragment } from "react";
import  HeaderOne  from "../Header/HeaderOne";
import  FooterOne  from "../Footer/FooterOne";

const LayoutOne = ({ children, aboutOverlay }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterOne />
    </Fragment>
  );
};

export default LayoutOne;
