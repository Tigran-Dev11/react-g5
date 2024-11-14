import { COLORS } from "../../assets/styles/colors";
import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ShopPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 93px;
`;

export const Title = styled.h1`
  width: 760px;
  font-size: 30px;
  font-weight: 700;
  line-height: 56px;
  color: ${COLORS.white};
`;

export const SubTitle = styled.h1`
  width: 780px;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: ${COLORS.white};
`;
