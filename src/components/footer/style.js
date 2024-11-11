import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const FooterComponent = styled.div`
  border: 1px solid ${COLORS.secondary};
  display: flex;
  flex-direction:column;
  align-items:center;
  gap:10px;  
  border-radius: 6px;
  padding: 5px 15px;
  background-color: ${COLORS.warning};
`;

export const FooterComponentInfo = styled.div`
    width:100%;
    height:fit-content;
    display:flex;
    justify-content:space-between;
`

export const FooterComponentTitle = styled.h1`
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
`;

export const FooterComponentSubTitle = styled.p`
  font-size: 8px;
  font-weight: 600;
  line-height: 20px;
`;