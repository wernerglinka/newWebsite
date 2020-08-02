import PropTypes from "prop-types";
import React from "react";
import Img from "gatsby-image";
import { ParallaxBanner } from "react-scroll-parallax";
import useClientThumbnail from "../../hooks/useClientsThumbnail";

import { ProjectWrapper } from "./selected-projects-styles";

/** ***************************************************************************
 *  Single Selected Projects Component
 *************************************************************************** */
const SingleSelectedProjectComponent = ({ client, thumbnail, year }) => {
  const thisThumbnail = useClientThumbnail(thumbnail);

  return (
    <ProjectWrapper>
      <div className="project-info">
        <div className="info-wrapper">
          <h3>{client}</h3>
          <p>{year}</p>
        </div>
      </div>
      <div className="project-thumbnail">
        <ParallaxBanner
          className="parallax-title"
          layers={[
            {
              image: thisThumbnail.src,
              amount: 0.3,
            },
          ]}
          style={{
            height: "400px",
          }}
        />
      </div>
    </ProjectWrapper>
  );
};

SingleSelectedProjectComponent.propTypes = {
  client: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};

export default SingleSelectedProjectComponent;
