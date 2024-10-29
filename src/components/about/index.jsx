import { IMAGES } from "../../assets/Images";
import * as S from "./styled";

export const Info = () => {
  return (
    <S.AboutPageContainer>
      <S.AboutPageTitle>Սարգիս Գուրգենի Բաղդյան</S.AboutPageTitle>
      <S.AboutPageMenu>
        <S.AboutPageMenuElement>
          21.02.2000
        </S.AboutPageMenuElement>
        <S.AboutPageMenuElement>
          Byureghavan Armenia
        </S.AboutPageMenuElement>
      </S.AboutPageMenu>
      <S.AboutPageInfo>
        Ես Սարգիսն եմ ծնվել եմ 2000 թվականի փետրվարի 21-ին սովորել եմ
        Բյուրեղավանի թիվ 2-րդ միջնակարգ դպրոցում 2006-2014 թվականներին դպրոցը
        ավարտելուց հետո ընդունվել եմ Բյուրեղավանի արհեստագործական ուսումնարանը
        2014-2017 թվականներին որպես ավտոփականագործ 2015 թվականին համատեղությամբ
        սովորել եմ Թումո ստեղծարար տեխնոլոգիաների կենտրոնում։
      </S.AboutPageInfo>
      <S.AboutPageImage src={IMAGES.myPhoto} alt="MyPhoto"/>
    </S.AboutPageContainer>
  
  );
};
