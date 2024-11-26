import styled, { keyframes } from "styled-components";
import { COLORS } from "../../assets/styles/colors";

const loaderAnimation = keyframes`
  0% {
    background-color: ${COLORS.danger};
  }
  100% {
    background-color: ${COLORS.white};
    }
`;

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid ${COLORS.danger};
  display: flex;
  justify-content: center;
  align-items: center;

  .zahlaGorc {
    gap: 6px;
    display: flex;
    flex-direction: column;
  }

  .ballsPlace {
    display: flex;
    gap: 2px;
  }

  .ball {
    background-color: white;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  .balls1 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.1s;
  }

  .balls3 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.2s;
  }

  .balls5 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.3s;
  }

  .balls6 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.4s;
  }

  .balls4 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.5s;
  }

  .balls2 {
    animation: ${loaderAnimation} 0.7s linear infinite;
    animation-delay: 0.6s;
  }
`;
