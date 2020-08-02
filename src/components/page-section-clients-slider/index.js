/* global window, document */

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import useClientNames from "../../hooks/useClientNames";
import { SectionWrapper, ClientsSliderWrapper, ClientsSliderInner } from "./clients-slider-styles";

/** ***************************************************************************
 *  Client Slider Component
 *************************************************************************** */

const ClientsSlider = ({ info }) => {
  const { title } = info;
  const allClients = useClientNames();
  const sliderRef = useRef(null);

  // calculate the width of the slider so the animation works properly
  useEffect(() => {
    if (sliderRef.current) {
      const children = sliderRef.current.childNodes;
      let totalWidth = 0;
      children.forEach(child => {
        totalWidth += child.offsetWidth;
      });

      // appeand a second string so slider transition at stringend is continuous
      children.forEach(child => {
        sliderRef.current.appendChild(child.cloneNode(true));
      });

      sliderRef.current.style.width = `${totalWidth}px`;
    }
  }, []);

  return (
    <SectionWrapper>
      <h2>{title}</h2>
      <ClientsSliderWrapper>
        <ClientsSliderInner ref={sliderRef}>
          {allClients.map(client => (
            <span>{client}</span>
          ))}
        </ClientsSliderInner>
      </ClientsSliderWrapper>
    </SectionWrapper>
  );
};

export default ClientsSlider;

ClientsSlider.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string,
  }),
};

ClientsSlider.defaultProps = {
  info: {
    title: null,
  },
};
