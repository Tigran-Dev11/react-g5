import styled, { keyframes } from "styled-components";



const loaderAnimation = keyframes`
  0% {
    background-color: red;
  }
  100% {
    background-color: white;
  }
`

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1px;

.ball {
  background-color: white;
  width: 6px;
  height: 6px;
  border-radius: 50%;
}

 .balls1 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.1s;
}

 .balls2 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.6s;
}

 .balls3 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.2s;
}

 .balls4 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.5s;
}

 .balls5 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.3s;
}

 .balls6 {
  animation: ${loaderAnimation} 0.6s linear infinite;
  animation-delay: 0.4s;
}
 
`;



