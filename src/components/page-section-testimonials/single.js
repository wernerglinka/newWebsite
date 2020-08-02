/* global window, document */

import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import SectionIntro from "../section-intro";
import useTestimonial from "../../hooks/useTestimonial";

import { Container } from "../common-styles";
import { SectionWrapper, Testimonial } from "./testimonial-styles";

/** ***************************************************************************
 *  Testimonial Component
 *************************************************************************** */

const SingleTestimonial = ({ info }) => {
  const { testimonial } = info;
  const { quote, quotee, position, affiliation, logo } = useTestimonial(testimonial);

  return (
    <SectionWrapper>
      <Container>
        <Testimonial>
          <p>{quote}</p>
          <footer>
            <p>{quotee}</p>
            <p>
              {position}, <span>{affiliation}</span>
            </p>
            <img src={logo} alt={affiliation} />
          </footer>
        </Testimonial>
      </Container>
    </SectionWrapper>
  );
};

export default SingleTestimonial;

SingleTestimonial.propTypes = {
  info: PropTypes.shape({
    testimonial: PropTypes.string,
  }),
};

SingleTestimonial.defaultProps = {
  info: {
    testimonial: null,
  },
};
