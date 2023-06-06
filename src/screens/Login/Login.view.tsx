import LoginLogic from "./Login.logic";
import "./Login.style.scss";
import { Input } from "@/components";
import { GlobalLayout } from "@/layouts";
const Login = () => {
  const { handleClick, setUsername, setPassword, errorText } = LoginLogic();

  return (
    <GlobalLayout isBgGradient={true}>
      <div className="login-page">
        <div className="login-form">
          <h2>Login</h2>
          <Input
            onChange={(val: string) => {
              setUsername(val);
            }}
            placeholder="username"
            type="text"
          />
          <Input
            onChange={(val: string) => {
              setPassword(val);
            }}
            placeholder="Password"
            type="password"
          />
          {errorText !== "" && (
            <label className="error-text">{errorText}</label>
          )}
          <button onClick={handleClick} type="submit">
            Submit
          </button>
        </div>
      </div>
    </GlobalLayout>
  );
};

export default Login;
