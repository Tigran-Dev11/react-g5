import "./style.css";
export const LoginForm = () => {
  return (
    <div className="loginPage">
      <form>
        <h1>LoginPage</h1>
        <input type="text" />
        <input type="password" />
        <div className="checkbox">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <button>Log-in</button>
      </form>
    </div>
  );
};
