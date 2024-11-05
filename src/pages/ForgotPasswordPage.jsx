import { MdOutlineTrackChanges } from "react-icons/md";
import AccountForm from "../components/AccountForm";
import { useState } from "react";
import { handleForgotPassword } from "../firebase/authFunctions";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const ForgotpasswordPage = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const errorMessage = await handleForgotPassword(email);
    if (errorMessage) {
      setError(errorMessage);
      setTimeout(() => {
        setError("");
      }, 5000);
    } else {
      setEmail("");
      navigate("/");
    }
  };

  return (
    <>
      <div className="bg-black">
        <div className="text-white text-xl p-5 flex items-center gap-3">
          <FaArrowLeft />
          <div>
            <Link to={"/"}> Go back to login page</Link>
          </div>
        </div>
        <div className="  min-h-screen flex justify-center items-center p-10 flex-col">
          <section className="py-20 rounded-lg shadow-lg p-3 mr-5">
            <div className="text-center ">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl flex justify-center items-center ">
                <MdOutlineTrackChanges className="text-white mr-5" /> Job
                Tracker
              </h1>
              <p className="my-4 text-xl text-white mt-5">
                Stay organized, track your progress, and land your dream job!
              </p>
            </div>
          </section>
          <div className="flex flex-col gap-10 md:flex-row">
            <AccountForm
              formTitle={"Forgot Password"}
              buttonName={"Reset Password"}
              buttonLink={"/reset-password"}
              email={email}
              setEmail={setEmail}
              handleSubmit={handleSubmit}
              error={error}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotpasswordPage;
