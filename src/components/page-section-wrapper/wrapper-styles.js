import styled from "@emotion/styled";
import { Container } from "../common-styles";

// a section may have a background color or a background pattern
// the pattern is a CSS pattern from gradient magic (https://www.gradientmagic.com/)
// a background pattern will overwrite a specified background color.
export const BackgroundColorAndContainer = styled(Container)`
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : props.theme.highlightColor)};
  margin: ${props => props.theme.sections.clearance} auto;
  padding: 20px;
  color: ${props => (props.bgIsDark ? "#ffffff" : "#000000")};
  background-image: ${props => {
    if (props.backgroundPattern === "light") return props.theme.backgroundPattern.light;
    if (props.backgroundPattern === "medium") return props.theme.backgroundPattern.medium;
    if (props.backgroundPattern === "dark") return props.theme.backgroundPattern.dark;
  }};
`;

export const BackgroundColorAndFullWidth = styled.div`
  margin: ${props => props.theme.sections.clearance} -${props => props.theme.space.defaultPadding};
  background-color: ${props => (props.backgroundColor ? props.backgroundColor : props.theme.highlightColor)};
  color: ${props => (props.bgIsDark ? "#ffffff" : "#000000")};
  padding: 20px 0;
  background-image: ${props => {
    if (props.backgroundPattern === "light") return props.theme.backgroundPattern.light;
    if (props.backgroundPattern === "medium") return props.theme.backgroundPattern.medium;
    if (props.backgroundPattern === "dark") return props.theme.backgroundPattern.dark;
  }};
`;

// sections without a background
export const WithContainer = styled(Container)`
  margin: ${props => props.theme.sections.clearance} auto;
`;

export const FullWidth = styled.div`
  margin: ${props => props.theme.sections.clearance} -${props => props.theme.space.defaultPadding};
  padding: 20px 0;

  ${Container} {
    padding: 0 20px;
  }
`;
