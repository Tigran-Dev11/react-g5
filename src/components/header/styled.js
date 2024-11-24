import styled from "styled-components";

export const Header=styled.div`
    border:1px solid blue;
    display:flex;
    justify-content:space-between;
    padding-inline:100px;
`

export const Image=styled.img`
width:50px;
height:50px;
`

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color: gray;
`;

export const HeaderMenu = styled.ul`
  display: flex;
  gap: 40px;
`;

export const HeaderMenuList = styled.li`
  font-size: 13px;
  font-weight: 600;
  list-style: none;
`;