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



export const GalleryBottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 22% 32% 42%;
  gap: 2%;
  margin-top: 10px;


  .imagePlace {
    height: 220px;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const GalleryTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto);
  gap: 2%;
  border: 1px solid yellow;
  margin-top: 70px;

  .imagePlace {
    height: 220px;

    &:nth-child(4) {
       border: 1px solid red;

    }
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export const Button = styled.button`
  width: 140px;
  height: 60px;
  margin-block: 70px 106px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  line-height: 38px;
  color: FFFFFF;
`;
