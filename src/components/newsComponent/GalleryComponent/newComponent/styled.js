import styled from "styled-components";

export const NewPlace = styled.div`
  display: flex;
  margin-bottom: 20px;
  align-items:center;
`;

export const Image = styled.img`
  width: 196px;
  height: 184px;
  border-radius: 20px;
`;

export const InfoPlace = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 32px;
`;

export const Title = styled.h1`
  width: 350px;
  font-size: 23px;
  font-weight: 600;
  line-height: 34px;
  text-align:start;
  color: #ffffff;
`;

export const Info = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`;

export const Span = styled.span`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #ffffff;
  background-color: #ff8484;
  padding:8px 26px 8px 26px;
  margin-right:8px;
  text-align:center;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  color: #ffffff;
`;
