import PropTypes from "prop-types";
import React from "react";
import getSelectedProjects from "../../hooks/useSelectedProjects";
import SingleProject from "./single-project";
import CTA from "../cta";

import { FeaturedProjects, Divider } from "./selected-projects-styles";

/** ***************************************************************************
 *  Selected Projects Component
 *************************************************************************** */
const SelectedProjectsComponent = ({ info }) => {
  const selectedProjects = getSelectedProjects();

  console.log(info);
  return (
    <FeaturedProjects>
      <Divider>&nbsp;</Divider>
      <h2>{info.title}</h2>
      {selectedProjects.map(selectedProject => (
        <SingleProject {...selectedProject} />
      ))}
      <CTA cta={info.cta} />
    </FeaturedProjects>
  );
};

SelectedProjectsComponent.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    cta: PropTypes.shape().isRequired,
  }).isRequired,
};

export default SelectedProjectsComponent;
