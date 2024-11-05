import { MdOutlineTrackChanges } from "react-icons/md";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

const LandingPage = () => {
  return (
    <>
      <div className=" bg-black min-h-screen flex justify-center items-center flex-col p-10">
        <section className="rounded-lg shadow-lg p-3 mr-5">
          <div className="text-center ">
            <h1 className="text-3xl font-extrabold text-white sm:text-5xl md:text-6xl flex justify-center items-center ">
              <MdOutlineTrackChanges className="text-white mr-5 hidden sm:inline-block" />{" "}
              Job Tracker
            </h1>
            <p className="my-4 text-xs text-white mt-5 sm:text-xl">
              Stay organized, track your progress, and land your dream job!
            </p>
          </div>
        </section>
        <div className="flex flex-col gap-10 lg:flex-row">
          <LoginForm />
          <SignupForm />
        </div>
      </div>
    </>
  );
};

export default LandingPage;
