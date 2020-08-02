import styled from "@emotion/styled";

export const MainMenu = styled.ul`
  list-style: none;

  > li {
    display: inline-block;

    /* overwrite default bullets */
    &:before {
      border: none;
      /* move out of the flow so it doesn't occupy space */
      position: absolute;
    }

    > a {
      margin: 0 15px;
    }
  }
`;
