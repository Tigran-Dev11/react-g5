import * as S from "./styled";

export const IconComponent = ({item}) => {
  const {image }=item

  return (
      <S.IconsBox>
        <S.Image src={image} alt="ContactIcon" />
      </S.IconsBox>
  );
};

