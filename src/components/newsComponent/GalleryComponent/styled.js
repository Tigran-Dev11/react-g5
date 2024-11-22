import styled from "styled-components";

export const GalleryComponent = styled.div`
display:flex;
flex-direction:column;
align:items:flex-start;
margin-block:90px;
padding-inline:110px;
`;

export const Image = styled.img`
  width: 590px;
  height: 300px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const GalleryTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Span = styled.span`
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  color: #fffcfc;
  width: 164px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2351f5;
`;

export const Title = styled.h1`
  width: 500px;
  font-size: 30px;
  font-weight: 600;
  line-height: 45px;
  color: #ffffff;
  text-align: start;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const SubTitle = styled.p`
  width: 440px;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  text-align: start;
  color: #ffffff;
`;
