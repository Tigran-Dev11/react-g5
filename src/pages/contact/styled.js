import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";
import { BREAKPOINTS } from "../../assets/styles/breakpoints";
import { NavLink } from "react-router-dom";

export const ContactPageContainer = styled.div`
  width: 100%;
  min-height: 400px;
  background-color: ${(props) =>
    props.isActive ? COLORS.primary : COLORS.info};

  /* @media screen ${BREAKPOINTS.xl} {
    min-height: 600px;
  } */
`;

export const ContactPageTopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  a {
  }
`;

export const ContactPageButtonPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

export const ContactPageTitle = styled.h1`
  font-size: 30px;
  color: ${COLORS.secondary};
  font-weight: 600;

  &.active {
    color: ${COLORS.success};
  }
`;

export const ContactLink = styled(NavLink)`
  color: ${COLORS.danger};
`;
