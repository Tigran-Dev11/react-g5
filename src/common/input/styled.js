import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const CommonInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  color: ${COLORS.secondary};
  margin-bottom: 6px;
  padding-left: 10px;
  border: 1px solid ${COLORS.primary};
`;

