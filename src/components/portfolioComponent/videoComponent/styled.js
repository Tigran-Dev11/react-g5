import styled from "styled-components";
import { COLORS } from "../../../assets/styles/colors";

export const VideoComponentDiv = styled.div`
  display: flex;
  align-items: flex-end;
  gap:20px;
  padding-bottom:20px;
`;

export const VideoPlace = styled.div`
  margin-top: 200px;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h1`
  width: 350px;
  font-size: 30px;
  font-weight: 700;
  line-height: 54px;
  color: ${COLORS.white};
`;

export const SubTitle = styled.p`
  width: 400px;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: ${COLORS.white};
`;

export const InfoComponent = styled.div``;
