import { COLORS } from "../../../assets/styles/colors";
import styled from "styled-components";

export const BannerInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Banner = styled.div`
  width: 100%;
  position: relative;
`;

export const Title = styled.h1`
  width: 820px;
  font-size: 36px;
  font-weight: 600;
  line-height: 68px;
  color: ${COLORS.white};
`;

export const BannerTitle = styled.h1`
  font-size: 30px;
  font-weight: 600;
  line-height: 56px;
  text-align: start;
  margin-left: 20px;
  color: ${COLORS.warning};
`;

export const SubTitle = styled.p`
  width: 500px;
  text-align: start;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  margin:0 0 40px 20px;
  color: ${COLORS.white};
`;

export const ImageBolls = styled.img`
  width: 196px;
  height: 154px;
  position: absolute;
  bottom: 400px;
  right: 120px;
`;

export const BannerImage = styled.img`
  width: 1100px;
  height: 462px;
`;

