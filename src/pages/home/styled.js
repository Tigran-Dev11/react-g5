import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const HomeComponent = styled.div`
    width:100%;
    height:100vh;
    border:1px solid ${COLORS.secondary};
    display:flex;
    flex-direction:column;
    gap:30px;
    padding:40px 0px 0px 40px;
`;

export const HomeComponentTitle = styled.h1`
    font-size:20px;
    font-weight:600;
    line-height:24px;
`;

export const HomeComponentSubTitle = styled.h1`
  font-size: 12px;
  font-weight: 600;
  line-height: 15px;
  width:50%;
`;