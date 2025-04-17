import "./Registration.scss";

import { useState } from "react";

interface RegistrationProps {
  ChangeToLoginHandler: () => void;
}

const Registration: React.FC<RegistrationProps> = ({
  ChangeToLoginHandler,
}) => {
  const [Login, setLogin] = useState<string>("");
  const [Email, setEmail] = useState<string>("");
  const [Password, setPassword] = useState<string>("");
  const [SecondPassword, setSecondPassword] = useState<string>("");

  return (
    <form className="Registration">
      <h1>Registration</h1>
      <input
        value={Login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="Login"
      />
      <input
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
      />

      <input
        value={Password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />
      <input
        value={SecondPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
        type="password"
        placeholder="Confirm password"
      />

      <button className="Registration__btn">Registration</button>

      <button onClick={ChangeToLoginHandler}>Login</button>
    </form>
  );
};

export default Registration;
