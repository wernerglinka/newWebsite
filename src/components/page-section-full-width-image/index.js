import PropTypes from "prop-types";
import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Img from "gatsby-image";
import CTA from "../cta";
import SectionIntro from "../section-intro";
import getImage from "../../hooks/useSiteImage";

import { FullWidthImage } from "./full-width-image-styles";

/** ***************************************************************************
 *  Full width image component
 *************************************************************************** */
const FullWidthImageComponent = ({ info }) => {
  const { image, alt } = info;
  const thisImage = getImage(image);

  return (
    <section>
      <ParallaxBanner
        className="parallax-title"
        layers={[
          {
            image: thisImage.src,
            amount: 0.3,
          },
        ]}
        style={{
          height: "300px",
        }}
      />
    </section>
  );
};

FullWidthImageComponent.propTypes = {
  info: PropTypes.shape({
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default FullWidthImageComponent;
