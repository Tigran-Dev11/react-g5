import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const RegisterComponent = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid ${COLORS.secondary};
  margin: 20px 0px 20px 0px;
`;

export const RegisterForm = styled.form`
  border: 1px solid ${COLORS.secondary};
  background-color: ${COLORS.gray};
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 20px 0 20px 20px;
  border-radius: 4px;
  margin: 20px 0 0 20px;
`;

export const RegisterTitle = styled.h1`
  font-size: 24px;
`;

