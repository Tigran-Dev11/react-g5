import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const InfoComponent = styled.div`
  width: 100%;
  height: 440px;
  background-color: ${COLORS.black};
  margin-block: 80px 110px;
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
  justify-content: space-around;
  margin-top: 120px;
`;

export const VideoPlace = styled.div`
  margin-top: 200px;
`;

export const CardTitle = styled.h1`
  font-size: 36px;
  font-weight: 500;
  line-height: 50px;
  color:white;
  margin-top:150px;
`;

export const CardSubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: white;
  margin-top:20px;
`;
