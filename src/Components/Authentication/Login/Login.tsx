import "./Login.scss";
import { useState } from "react";

interface LoginProps {
  ChangeToRegistrationHandler: () => void;
}

const Login: React.FC<LoginProps> = ({ ChangeToRegistrationHandler }) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: login, // login как email
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Здесь позже будем обрабатывать токен
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login error");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      {error && <div className="error-message">{error}</div>}

      <input
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        type="text"
        placeholder="Login"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

      <button onClick={handleLogin} className="Login__btn">
        Enter
      </button>

      <button onClick={ChangeToRegistrationHandler}>Registration</button>
    </div>
  );
};

export default Login;
