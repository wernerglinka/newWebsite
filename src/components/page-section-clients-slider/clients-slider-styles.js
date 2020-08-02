import styled from "@emotion/styled";

export const SectionWrapper = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 70px 0;
  h2 {
    text-align: center;
  }
`;
export const ClientsSliderWrapper = styled.div`
  overflow: hidden;
`;

export const ClientsSliderInner = styled.div`
  font-size: 50px;
  white-space: nowrap;
  animation: slide 60s linear infinite;

  span {
    padding: 0 40px;
  }

  @keyframes slide {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
`;
