import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const AboutPageContainer = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content:space-between;
  gap: 60px;
  padding: 20px 0 0 20px;
`;

export const InfoPlace=styled.div`
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding-left:20px;

`

export const AboutPageTitle = styled.h1`
  width: 420px;
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  color: ${COLORS.white};
  text-align: start;
`;

export const AboutPageSubTitle = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 30px;
  color: ${COLORS.white};
  width: 400px;
  text-align:start;
`;

export const ImagePlace=styled.div`
  padding-right:40px;
`

export const AboutPageImage = styled.img`
  width: 600px;
  height: 550px;
  border-radius: 4px;
`;
