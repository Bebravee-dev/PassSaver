import "./Authentication.scss";

import { useState } from "react";

import Login from "./Login/Login";
import Registration from "./Registration/Registration";

const Authentication: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const ChangeToLoginHandler = () => {
    setIsLogin(true);
  };

  const ChangeToRegistrationHandler = () => {
    setIsLogin(false);
  };

  return (
    <div className="Authentication">
      {isLogin ? (
        <Login ChangeToRegistrationHandler={ChangeToRegistrationHandler} />
      ) : (
        <Registration ChangeToLoginHandler={ChangeToLoginHandler} />
      )}
    </div>
  );
};

export default Authentication;
