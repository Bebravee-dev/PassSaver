import "./Login.scss";

import { useState } from "react";

interface LoginProps {
  ChangeToRegistrationHandler: () => void;
}

const Login: React.FC<LoginProps> = ({ ChangeToRegistrationHandler }) => {
  const [Login, setLogin] = useState<string>("");
  const [Password, setPassword] = useState<string>("");

  return (
    <form className="Login">
      <h1>Login</h1>
      <input
        value={Login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="Login"
      ></input>
      <input
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      ></input>
      <button className="Login__btn">Enter</button>
      <button onClick={ChangeToRegistrationHandler}>Registration</button>
    </form>
  );
};

export default Login;
