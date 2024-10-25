import styled from "styled-components";
import {COLORS} from "../../assets/styles/colors"

export const HeaderComponent = styled.div`
  border: 1px solid ${COLORS.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 6px;
  padding: 5px 15px;
  background-color: ${COLORS.warning};
`;

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color:${COLORS.secondary};
`;

export const HeaderImage = styled.img`
    width:40px;
    height:30px;
    border-radius:4px;
`


export const HeaderMenu =styled.ul`
    display:flex;
    gap:20px;
`

export const HeaderMenuList = styled.li`
  font-size: 13px;
  font-weight: 600;
  list-style: none;
`;