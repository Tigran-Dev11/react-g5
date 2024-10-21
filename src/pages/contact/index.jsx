import { useState } from "react";
import * as S from "./styled";
import Button from "../../common/button";
import { ROUTES } from "../../utils/constant";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <S.ContactPageContainer isActive={isActive}>
      <S.ContactPageTopPart>
        <S.ContactPageTitle className={isActive ? "active" : ""}>
          <S.ContactLink to={ROUTES.home}>Home</S.ContactLink>
        </S.ContactPageTitle>
      </S.ContactPageTopPart>
      <S.ContactPageButtonPart>
        <Button text="active State" click={() => setIsActive(!isActive)} />
      </S.ContactPageButtonPart>
    </S.ContactPageContainer>
  );
};

export default Contact;
