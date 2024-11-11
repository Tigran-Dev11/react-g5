import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const InfoComponent = styled.div`
  width: 100%;
  height: 440px;
  border: 1px solid red;
  background-color: ${COLORS.black};
  margin-bottom: 80px;
  padding-top:30px;
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
  line-height: 30px;
  color: ${COLORS.white};
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 30px;
  color: ${COLORS.white};
`;

export const BannerPlace = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-around;
  margin-top:120px;
  border: 1px ${COLORS.white};
`;

export const VideoPlace = styled.div`
  margin-top: 200px;
`;
