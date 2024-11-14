import * as S from "./styled";

export const IconComponent = (item) => {
  
  return (
      <S.IconsBox>
        <S.Image src={item.image} alt="ContactIcon" />
      </S.IconsBox>
  );
};
