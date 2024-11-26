import { Input } from "../../common/input";
import { Button } from "../../common/button";
import * as S from "./styled"

export const LoginForm = () => {
    
    

    return (
      <S.LoginPage>
        <S.LoginForm >
          <S.Title>Login-Page</S.Title>
          <Input 
          type="email" 
          placeholder="email" />
          <Input
            type="password"
            placeholder="password"
          />
          <Button text={"Sign-in"} />
        </S.LoginForm>
      </S.LoginPage>
    );
};
