import { useEffect, useState } from "react";
import JobListing from "./JobListing";
import Spinner from "./Spinner";
import FilterBar from "./FilterBar";
import { db, auth } from "../firebase/firebaseConfig"; // Combined imports
import { getDocs, collection, query, orderBy, limit } from "firebase/firestore";

const JobListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchJob, setSearchJob] = useState("");
  const [status, setStatus] = useState("");

  const userId = auth.currentUser?.uid; // Optional chaining to avoid null checks
  const jobsRef = collection(db, "users", userId, "jobs");

  console.log(userId)

  const mapJobs = () => {
    const filteredJobs = jobs
      .filter((job) => status === "All" || !status || job.status === status)
      .filter((job) =>
        job.title.toLowerCase().includes(searchJob.toLowerCase())
      )
      .map((job) => (
        <JobListing job={job} key={job.id} onDelete={handleDeleteJob} />
      ));

    return filteredJobs;
  };

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true);
      try {
        const jobQuery = isHome
          ? query(jobsRef, orderBy("createdAt", "desc"), limit(3))
          : jobsRef;

        const data = await getDocs(jobQuery);
        const fetchedJobs = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []); // Added dependencies for useEffect

  const handleDeleteJob = (jobId) => {
    setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
  };

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-black mb-8 text-center">
          {!isHome ? "Browse Jobs" : "Recently Added Jobs"}
        </h2>
        {!isHome && (
          <FilterBar
            searchJob={searchJob}
            setSearchJob={setSearchJob}
            status={status}
            setStatus={setStatus}
          />
        )}
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mapJobs()}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
