import * as S from "./styled"

export const GalleryComponent=({item})=>{
    const {image, name, time, title, firstSubTitle, secondSubTitle}=item

    return (
      <S.GalleryComponent>
        <S.Image src={image} alt="GalleryImage" />
        <S.GalleryTop>
          <S.Info>
            <S.Span>{name}</S.Span>
            <S.SubTitle>{time}</S.SubTitle>
          </S.Info>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{firstSubTitle}</S.SubTitle>
          <S.SubTitle>{secondSubTitle}</S.SubTitle>
        </S.GalleryTop>
      </S.GalleryComponent>
    );
}
