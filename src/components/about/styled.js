import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";
// import { BREAKPOINTS } from "../../assets/styles/breakpoints";
import { NavLink } from "react-router-dom";

export const AboutPageContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0 0 20px;
`;

export const AboutPageTitle = styled.h1`
  font-size: 25px;
  font-weight: 600;
  color: ${COLORS.primary};
`;

export const AboutPageMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items:flex-start;
`;

export const AboutPageMenuElement = styled.li`
  font-size: 12px;
  font-weight: 600;
  color: ${COLORS.primary};
`;

export const AboutPageInfo = styled.p`
  font-size: 15px;
  font-weight: 600;
  color: ${COLORS.primary};
  width: 400px;
`;

export const AboutPageImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 4px;
`;
