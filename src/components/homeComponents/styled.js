import { COLORS } from "../../assets/styles/colors";
import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  // align-items:center;
  padding-inline: 100px;
`;

export const ShopPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 250px;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  line-height: 56px;
  color: ${COLORS.white};
  margin-top: 230px;
`;

export const SubTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: ${COLORS.white};
  margin-top: 15px;
`;

export const ShopBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 94px;
  padding-inline: 100px;
`;

export const GameImageGallery = styled.div`
  border: 1px solid red;
`;

export const GalleryTop = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  border: 1px solid yellow;
  gap: 10px;
  margin-top: 70px;
`;
export const Button = styled.button`
  width:140px;
  height:60px;
  margin-block:70px 106px;
  text-align:center;
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;
  color: FFFFFF;
`;
