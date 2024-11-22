import {Input} from "../../../common/input"
import Button from "../../../common/button"
import * as S from "./styled"

export const MessageCopmonent=()=>{
    return (
      <S.MessagePlace>
        <S.FormPlace>
          <S.Title>Say hello</S.Title>
          <S.SubTitle>
            Lorem Ipsum is simply dummy text of the printing .
          </S.SubTitle>
          <S.FormController>
            <S.InfoPlace>
              <S.InfoDiv>
                <S.Info>First-Name</S.Info>
                <Input />
              </S.InfoDiv>
              <S.InfoDiv>
                <S.Info>Last-Name</S.Info>
                <Input />
              </S.InfoDiv>
            </S.InfoPlace>
            <S.Info>Email</S.Info>
            <Input />
            <S.Info>Message</S.Info>
            <S.TextArea></S.TextArea>
            <Button text={"Get in touch"} />
          </S.FormController>
        </S.FormPlace>
      </S.MessagePlace>
    );         

}


