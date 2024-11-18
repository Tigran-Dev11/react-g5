import { COLORS } from "../../assets/styles/colors";
import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 100px;
`;

export const ShopPlace = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 94px;
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

export const ShopBox = styled.div`
  width: 1040px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 94px;
`;

export const GameImageGallery = styled.div`
  width: 730px;
  height: 480px;
  display: flex;
  flex-direction:column;
  gap: 33px;
`;

export const GalleryTop = styled.div`
width:100%;
height:220px;
display:flex;
gap:28px;

  `;

export const GalleryBottom = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  gap: 28px;
`;
