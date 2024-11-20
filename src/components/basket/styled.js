import styled from "styled-components";
import { COLORS } from "../../assets/styles/colors";

export const BasketComponent = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid ${COLORS.warning};
`;

export const ImagePlace = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid ${COLORS.gray};
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

export const CountPlace = styled.div`
  width: 100%;
  height: 100vh;
`;
