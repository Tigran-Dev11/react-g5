import * as S from "./styled"

export const SearchComponent=()=>{

    return (
      <S.SearchPlace>
        <S.Title>Lorem Ipsum</S.Title>
        <S.SubTitle>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </S.SubTitle>
        <S.SearchForm>
          <S.Info>
            <S.SecondTitle>Stay in the loop</S.SecondTitle>
            <S.SecondSubTitle>
              Subscribe to receive the latest news and updates about TDA.
            </S.SecondSubTitle>
            <S.SecondSubTitle>We promise not to spam you! </S.SecondSubTitle>
          </S.Info>
          <S.Form>
            <S.Input type="email" placeholder="Enter email address" />
            <S.Button>Continue</S.Button>
          </S.Form>
        </S.SearchForm>
      </S.SearchPlace>
    );
}