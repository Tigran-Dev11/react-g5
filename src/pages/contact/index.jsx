import { useState } from "react";
import * as S from "./styled";
import Button from "../../common/button";
import { ROUTES } from "../../utils/constant";
import { useSelector } from "react-redux";
import { productSelector } from "../../libs/redux/product-slice/selectors";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);
  const { productCount } = useSelector(productSelector);


  return (
    <S.ContactPageContainer isActive={isActive}>
      <S.ContactPageTopPart>
        <S.ContactPageTitle className={isActive ? "active" : ""}>
          <S.ContactLink to={ROUTES.home}>Home</S.ContactLink>
        </S.ContactPageTitle>
      </S.ContactPageTopPart>
      <S.ContactPageButtonPart>
        <Button text="active State" click={() => setIsActive(!isActive)} />

          <span>{productCount}</span>
      </S.ContactPageButtonPart>
    </S.ContactPageContainer>
  );
};

export default Contact;
