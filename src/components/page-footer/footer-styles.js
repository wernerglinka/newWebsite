import styled from "@emotion/styled";
import Logo from "../site-icons/logo";

export const Wrapper = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: -1;
  width: 100%;
  height: 700px;
`;

export const FooterInfo = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;
  width: 80%;
  height: 600px;
  padding: 40px;
  background-color: #000;

  svg {
    width: 150px;
    margin-bottom: 50px;

    path {
      fill: #fff;
    }
  }
`;

export const FooterDecoration = styled.div`
  position: fixed;
  right: 0;
  bottom: 400px;
  width: 60%;
  height: 400px;
  background-color: #f0f0f0;

  .gatsby-image-wrapper {
    height: 100%;
  }
`;

export const Copyright = styled.div`
  text-align: center;
  color: #fff;
  font-size: 12px;
  padding-top: 20px;
`;
