import styled from "@emotion/styled";

export const PageContent = styled.div`
  padding-top: 40px;
  animation-duration: 1s;
  animation-name: move-up;

  @keyframes move-up {
    from {
      padding-top: 80px;
    }
    to {
      padding-top: 40px;
    }
  }
`;

export const HomePageIntro = styled.div`
  p {
    font-size: 80px;
    line-height: 1.2;
    margin-bottom: 0;
    animation: appear 1s ease-in-out;

    @media (max-width: 1000px) {
      font-size: 6vw;
    }
  }
  p + p {
    line-height: 20px;
    margin-top: 0;
    animation: none;

    span {
      display: inline-block;
      font-size: 20px;
      padding-top: 30px;

      @media (max-width: 1000px) {
        font-size: 16px;
      }
    }
  }
  sup {
    color: red;
  }

  @keyframes appear {
    from {
      opacity: 0;
      line-height: 1.5;
    }
    to {
      opacity: 1;
      line-height: 1.2;
    }
  }
`;

export const PageIntro = styled.div`
  font-size: 1.125rem;
`;

export const TwoColumns = styled.section`
  display: flex;
  justify-content: flex-start;
`;

export const Main = styled.main`
  flex: 0 0 70%;
`;

export const Sidebar = styled.aside`
  flex: 0 0 30%;
  padding-left: 25px;
  border-left: 1px solid #f0f0f0;
  margin-left: 25px;

  h2 {
    font-size: 24px;
    padding-bottom: 10px;
    border-bottom: 1px solid #f0f0f0;
  }
`;

export const ToTop = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  right: 20px;
  z-index: 1;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-color: transparent;
  padding: 0;
  cursor: pointer;
  background-color: #000;
  opacity: 0;
  transition: all 0.3s ease-in-out;

  &.isVisible {
    opacity: 1;

    &:hover {
      opacity: 0.6;
    }
  }

  svg {
    display: block;
    position: relative;
    top: 0;
    width: 24px;
    height: auto;
    color: #fff;
    margin: 0 auto;
  }
`;

export const PageBg = styled.div`
  background-color: #fff;
  padding: 0 20px 50px;
  margin-bottom: 900px;
`;
