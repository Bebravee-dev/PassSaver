import "./Registration.scss";
import { useState } from "react";

interface RegistrationProps {
  ChangeToLoginHandler: () => void;
}

const Registration: React.FC<RegistrationProps> = ({
  ChangeToLoginHandler,
}) => {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setSecondPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: login,
          email: login,
          password: password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }

      ChangeToLoginHandler();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration error");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="Registration">
      <h1>Registration</h1>
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

      <input
        value={confirmPassword}
        onChange={(e) => setSecondPassword(e.target.value)}
        type="password"
        placeholder="Confirm password"
      />

      <button onClick={handleRegister} className="Registration__btn">
        Registration
      </button>

      <button onClick={ChangeToLoginHandler}>Login</button>
    </div>
  );
};

export default Registration;
