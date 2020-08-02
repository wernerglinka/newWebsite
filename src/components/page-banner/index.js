/* global navigator */
import React, { useContext } from "react";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";

import { Banner, BackgroundImage, BannerContent } from "./page-banner-styles";

/** ***************************************************************************
 *  Page Banner Component
 *************************************************************************** */
const PageBanner = ({ properties, title }) => {
  const { bgImage, imageMaxWidth, sizes, alt } = properties;

  return (
    <Banner>
      <BackgroundImage style={{ backgroundImage: `` }}>
        <BannerContent>
          <h1>{titleCase(title)}</h1>
        </BannerContent>
      </BackgroundImage>
    </Banner>
  );
};

PageBanner.propTypes = {
  properties: PropTypes.shape().isRequired,
  title: PropTypes.string,
};

PageBanner.defaultProps = {
  title: "",
};

export default PageBanner;
