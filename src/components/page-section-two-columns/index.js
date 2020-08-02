import PropTypes from "prop-types";
import React from "react";
import mdStringToHTML from "../../utilities/md-to-html";
import { Wrapper, Column } from "./two-columns-styles";

const TwoColumnsComponent = ({ info }) => {
  const { column1, column2 } = info;
  return (
    <Wrapper>
      <Column textSize={column1.textSize} dangerouslySetInnerHTML={{ __html: mdStringToHTML(column1.text) }} />
      <Column textSize={column2.textSize} dangerouslySetInnerHTML={{ __html: mdStringToHTML(column2.text) }} />
    </Wrapper>
  );
};

TwoColumnsComponent.propTypes = {
  info: PropTypes.shape(),
};

TwoColumnsComponent.defaultProps = {
  info: {},
};

export default TwoColumnsComponent;
