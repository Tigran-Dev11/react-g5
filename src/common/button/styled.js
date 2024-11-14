import { COLORS } from "../../assets/styles/colors";
import styled from "styled-components";

export const Button = styled.button`
  width: 190px;
  height: 50px;
  border-radius: 40px;
  border: none;
  background-image: linear-gradient(${COLORS.gold}, ${COLORS.orange});
  font-size:16px;
  font-weight:500;
  line:height:24px;
  color:${COLORS.white};
  text-align:center;
  margin-top:64px;
`;

