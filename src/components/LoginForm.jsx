import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountForm from "./AccountForm";
import { handleLogin } from "../firebase/authFunctions";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = await handleLogin(email,password);

    if (errorMessage) {
      setError(errorMessage);

      setTimeout(() => {
        setError(""); 
      }, 5000);
    } else {
      navigate("/home"); 
    }
  };

  return (
    <AccountForm
      formTitle={"Log In"}
      buttonName={"Log In"}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default LoginForm;
