import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const FooterComponent = styled.div`
  height: 380px;
  border: 1px solid ${COLORS.secondary};
  display: flex;
  flex-direction:column;
  gap: 10px;
  border-radius: 6px;
  padding: 6px 16px;
`;

export const FooterTop = styled.div`
  display: flex;
  align-items:flex-end;
  gap: 10px;
  border-radius: 6px;
  padding: 6px 16px;
`;

export const IconsPlace = styled.div`
  display: flex;
  margin-left:83px;
`;

export const FooterBottom=styled.div`
  width:100%;
  height:90px;
  border-top:0.8px solid #D2D2D2;
  margin-top:60px;
  text-align:center;
`

export const BottomSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: white;
`;
