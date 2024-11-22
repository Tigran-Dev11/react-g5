import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const AboutPageContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  flex-direction:column;
  align-items:space-between;
  gap: 60px;
  padding-top:20px;
`;

export const Section=styled.div`
display:flex;
margin-top:34px;
gap:50px;
`

export const InfoPlace=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding-left:20px;

`

export const Title = styled.h1`
  font-size: 26px;
  font-weight: 600;
  line-height: 45px;
  color: ${COLORS.white};
  text-align:start;
  margin:144px 0 64px 14px;
`;

export const AboutPageTitle = styled.h1`
  width: 420px;
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  color: ${COLORS.white};
  text-align: start;
`;

export const AboutPageSubTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: ${COLORS.white};
  width: 400px;
  text-align:start;
`;

export const ImagePlace=styled.div`
  padding-right:40px;
  margin-left:150px;
`

export const AboutPageImage = styled.img`
  width: 600px;
  height: 550px;
  border-radius: 4px;
`;

export const TeamTitle=styled.h1`
font-size:26px;
font-weight:600;
line-height:46px;
color:#FFFFFF;
text-align:start;  
margin-block:148px 54px;
`

export const AboutWorkers=styled.div`
  display:flex;
  margin-bottom:148px;
  
`

export const AboutTeamPlace=styled.div`
  display:flex;
  gap:30px;
  margin-bottom:158px;
`

