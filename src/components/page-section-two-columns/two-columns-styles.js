import styled from "@emotion/styled";

export const Wrapper = styled.div`
  margin-bottom: ${props => props.theme.sections.clearance};
  display: flex;
  justify-content: space-between;

  > * {
    flex: 0 0 45%;
`;

export const Column = styled.div`
  h2 {
    font-size: 20px;
  }
  ul {
    padding: 0;
  }
  li {
    font-size: ${props => {
      if (props.textSize === "large") return "1.7em";
      if (props.textSize === "normal") return "inherit";
      return "inherit";
    }};

    line-height: ${props => {
      if (props.textSize === "large") return "1.2";
      if (props.textSize === "normal") return "inherit";
      return "inherit";
    }};

    padding-bottom: 20px;

    &:before {
      border: none;
      padding: 0;
    }
  }
`;
