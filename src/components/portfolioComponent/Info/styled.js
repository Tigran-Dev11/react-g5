import styled from "styled-components";
import { COLORS } from "../../../assets/styles/colors";
export const InfoBox=styled.div`
    width:100%;
    min-height:490px;
    display:flex;
    border:1px solid red;    
`;

export const InfoBoxTitle= styled.h1`
    font-size:30px;
    font-weight:500;
    line-height:45px;
    color:${COLORS.white}
`;

export const InfoPart=styled.div`
    width:50%;
    height:100vh;
    border:1px solid blue;
    margin-top:40px;
`

export const InfoBoxSubTitle = styled.p`
  font-size: 17px;
  font-weight: 400;
  line-height: 25px;
  color: ${COLORS.white};
`;

export const ImagePart=styled.div`
width:50%;
height:100vh;
border:1px solid green;
`;

