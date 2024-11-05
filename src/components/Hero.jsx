import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            Job Tracker
          </h1>
          <p className="my-4 text-xl text-white mt-5">
            Stay organized, track your progress, and land your dream job!
          </p>
          <Link
            to="/add-job"
            className="inline-block bg-white text-black rounded-lg px-4 py-2 mt-3"
          >
            Add Job
          </Link>
          <Link
            to="/jobs"
            className="inline-block bg-slate-400 text-white rounded-lg px-4 py-2 mt-3 ml-4"
          >
            Browse Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
