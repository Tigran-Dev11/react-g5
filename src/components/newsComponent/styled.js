import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const Title = styled.h1`
  font-size: 33px;
  font-weight: 600;
  line-height: 60px;
  color: ${COLORS.white};
`;

export const SubTitle = styled.h1`
  font-size: 16px;
  font-weight: 500;
  line-height: 30px;
  margin-top: 13px;
  color: ${COLORS.white};
`;

export const Image = styled.img`
  width: 1060px;
  height: 540px;
  margin-top: 93px;
`;

export const ContactPlace = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: 50px;
`;

export const ContactBox = styled.div`
  display: flex;
`;

export const Icons = styled.div``;

export const SecondTitle = styled.h1`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align:start;
  color: ${COLORS.white};
`;

export const IconsPlace = styled.div`
  margin-top: 18px;
  display: flex;
  gap: 6px;
`;

export const ImageIcon = styled.img`
  width: 30px;
  height: 30px;
`;

export const ContactNumberPlace = styled.div`
  display: flex;
  align-items:center;
  gap: 10px;
`;

export const LocationPlace = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
