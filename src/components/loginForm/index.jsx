import { Button } from "../../common/button";

export const LoginForm = () => {
  return (
    <div>
      <form>
        <input type="text" />
        <input type="password" />
        <Button text={"Sign-in"} />
      </form>
    </div>
  );
};
