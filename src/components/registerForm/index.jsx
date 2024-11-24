import { Button } from "../../common/button"

export const RegisterForm=()=>{
    return (
        <div>
            <form>
                <input type="text" placeholder="First-Name" />
                <input type="text" placeholder="Last-Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="password" placeholder="Confirm-Password" />
                <input type="date" placeholder="" />
                <Button text={"Registration"} />
            </form>
        </div>
    )
}