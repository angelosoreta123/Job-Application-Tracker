import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AccountForm from "./AccountForm";
import { handleSignup } from "../firebase/authFunctions";
const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for storing error messages

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = await handleSignup(email, password);

    if (errorMessage) {
      setError(errorMessage);
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      setEmail("");
      setPassword("");
      navigate("/");
    }
  };

  return (
    <AccountForm
      formTitle={"Create an Account"}
      buttonName={"Sign Up"}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};

export default SignupForm;
