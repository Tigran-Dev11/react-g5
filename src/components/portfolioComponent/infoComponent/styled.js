import styled from "styled-components";
import { COLORS } from "../../../assets/styles/colors";

export const InfoComponent = styled.div`
    padding-inline:130px 170px;
    height:440px;
    border:1px solid red;

`

export const InfoPlace= styled.div`
width:100%;    
display:flex;
justify-content:space-between;
`;

export const InfoPlaceTitle= styled.h1`
    font-size:25px;
    font-weight:700;
    line-height:30px;
    color:${COLORS.white};
`;

export const InfoSubTitle=styled.p`
    font-size:20px;
    font-weight:400;
    line-height:30px;
    color:${COLORS.white};
`