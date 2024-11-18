import { COLORS } from "../../../assets/styles/colors";
import styled from "styled-components";

export const ProducePlace = styled.div`
  width: 100%;
  min-height: fit-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoProducePlace = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 20px;
  text-align:start;
`;

export const IconsPlace = styled.div`
  width: 50%;
  position: reletive;
`;

export const FavSubTitle = styled.p`
    font-size:20px;
    font-weight:700;
    line:height:30px;
    color: ${COLORS.gold}
`;

export const Title = styled.h1`
  width: 480px;
  font-size: 50px;
  font-weight: 700;
  line-heigth: 78px;
  color: ${COLORS.white};
`;

export const SubTitle = styled.p`
  width: 480px;
  font-size: 16px;
  font-weight: 600;
  line-heigth: 32px;
  color: ${COLORS.white};
`;

export const PositionalImage1 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 300px;
  left: 640px;
`;

export const PositionalImage2 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 830px;
`;

export const PositionalImage3 = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 100px;
  left: 1170px;
`;

