import { Input } from "../../common/input"
import { Button } from "../../common/button"
import * as S from "./styled"

export const RegisterForm=()=>{
    return (
        <S.RegisterPage>
            <S.RegisterForm>
                <S.Title>Register-Page</S.Title>
                <Input type="text" placeholder="First-Name" />
                <Input type="text" placeholder="Last-Name" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Input type="password" placeholder="Confirm-Password" />
                <Input type="date" placeholder="Date-Birthday" />
                <Button text={"Registration"} />
            </S.RegisterForm>
        </S.RegisterPage>
    )
}