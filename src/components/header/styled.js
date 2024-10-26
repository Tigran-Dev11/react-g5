import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";
import { BREAKPOINTS } from "../../assets/styles/breakpoints";


export const HeaderContainer = styled.div`
    width: 100%;
    padding: 30px;
    background-color: ${(props) =>
    props.isActive ? COLORS.primary : COLORS.info};
       @media screen ${BREAKPOINTS.xl} {
     
  } 
`

export const HeaderLinksWrapper = styled.ul`
 display:flex;
 justify-content:space-between;
 align-items: centre;
  background-color:${COLORS.success};
  padding:10px

`
export const HeaderLink = styled.li`
    font-size: 20px;
    a{
     color:${COLORS.info};
     &:hover{
     color:${COLORS.warning};
     }
    }


`