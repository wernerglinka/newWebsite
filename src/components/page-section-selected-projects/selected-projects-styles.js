import styled from "@emotion/styled";
import InternalCTALink from "../cta/cta-styles";

export const FullWidthImage = styled.img``;

export const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-top: -50px;
`;

export const Divider = styled.div`
  position: absolute;
  left: 50%;
  top: 50px;
  max-width: 1px;
  height: 100%;
  background-color: #ccc;
`;

export const FeaturedProjects = styled.section`
  position: relative;

  h2 {
    text-align: center;
    margin-bottom: 150px;
  }

  .project-info {
    position: relative;

    .info-wrapper {
      position: absolute;
      top: 30%;
      right: -200px;
      z-index: 10;
      width: 50vw;
      padding: 10px 30px;
      background-color: rgba(255, 255, 255, 0.8);
    }

    h3 {
      margin: 0;
      font-size: 4vw;
      text-align: right;
    }
    p {
      width: 100%;
      text-align: right;
      margin: 0;
    }
  }
  .project-thumbnail {
    flex: 0 0 40vw;
  }

  > div:nth-child(even) {
    flex-direction: row-reverse;

    .info-wrapper {
      right: auto;
      left: -200px;
    }

    h3 {
      text-align: left;
      margin: 0 -100px 0 0 -100px;
    }
    p {
      text-align: left;
    }
  }

  [class*="InternalCTALink"] {
    display: block;
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: -150px;
    padding-bottom: 50px;
  }
`;
