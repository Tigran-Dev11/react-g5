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
          <div>
            <S.Info>First-Name</S.Info>
            <Input />
            <S.Info>Last-Name</S.Info>
            <Input />
          </div>
          <S.Info>Email</S.Info>
          <Input />
          <S.Info>Message</S.Info>
          <textarea></textarea>
          <Button text={"Get in touch"} />
        </S.FormPlace>
      </S.MessagePlace>
    );         

}


