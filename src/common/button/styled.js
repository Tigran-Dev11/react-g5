import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const ButtonStyled = styled.button`
  padding-inline: 20px;
  padding-block: 10px;
  font-size: 16px;
  color: ${COLORS.warning};
  border: 1px solid ${COLORS.success};
  background-color: ${COLORS.secondary};
  border-radius: 4px;
`;
