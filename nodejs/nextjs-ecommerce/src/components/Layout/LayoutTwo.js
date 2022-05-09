import { Fragment } from "react";
import  HeaderOne  from "../Header/HeaderOne";
import  FooterTwo  from "../Footer/FooterTwo";

const LayoutTwo = ({ children, aboutOverlay, footerBgClass }) => {
  return (
    <Fragment>
      <HeaderOne aboutOverlay={aboutOverlay} />
      {children}
      <FooterTwo footerBgClass={footerBgClass} />
    </Fragment>
  );
};

export default LayoutTwo;
