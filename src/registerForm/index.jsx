import "../registerForm/style.css"
export const RegisterForm=()=>{
    return (
      <div className="registerPage">
        <form>
          <div>
            <h1>RegisterPage</h1>
            <p>First Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Last Name</p>
            <input type="text" />
          </div>
          <div>
            <p>Password</p>
            <input type="text" />
          </div>
          <div>
            <p>Repeat-Password</p>
            <input type="text" />
          </div>
          <div>
            <p>Date Birthday</p>
            <input type="date" />
          </div>
          <div className="checkbox">
            <input type="checkbox" />
            <p>Remember me</p>
          </div>
          <button>Log-in</button>
        </form>
      </div>
    );
}