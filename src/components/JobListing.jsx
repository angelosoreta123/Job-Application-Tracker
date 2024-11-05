import { Link, useNavigate } from "react-router-dom";
import { FaMapMarker } from "react-icons/fa";
import { deleteJob } from "../services/jobService";
import { auth } from "../firebase/firebaseConfig";

const JobListing = ({ job, onDelete }) => {
  const navigate = useNavigate();
  const userId = auth.currentUser?.uid; 


  const handleJobDeleteClick = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this? This action cannot be undone!"
    );

    if (confirm) {
      try {
        const success = await deleteJob(userId, job.id);
        if (success) {
          onDelete(job.id); // Pass only the job ID
          navigate("/jobs");
        } else {
          alert("Failed to delete the job. Please try again.");
        }
      } catch (error) {
        console.error("Error deleting job:", error);
        alert("An error occurred while deleting the job. Please try again.");
      }
    }
  };

  return (
    <div className="shadow-gray-300 rounded-xl shadow-md relative border-2 flex flex-col h-full">
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <div className="mb-6">
            <div className="flex flex-col lg:flex-row justify-between mb-4">
              <div className="text-gray-600 my-2 p-2">{job.type}</div>
              <div className="text-black shadow-xl my-2 p-2 bg-slate-200 rounded-lg">
                <span className="font-bold mr-1">Status:</span>
                {job.status}
              </div>
            </div>
            <h3 className="text-xl font-bold truncate mt-5">{job.title}</h3>
          </div>
          <h3 className="text-black font-semibold">{job.company.name}</h3>
          <div className="text-justify flex-grow mb-5">{job.description}</div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <FaMapMarker className="text-lg mr-2" />
            <span>{job.location}</span>
          </div>
          <h3 className="text-black mb-2 font-semibold">{job.salary}</h3>
          <h3 className="text-black mb-2">{job.company.contactEmail}</h3>
          <h3 className="text-black">{job.company.contactPhone}</h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between mb-2 p-4">
        <Link
          to={`/edit-job/${job.id}`}
          className="bg-black hover:bg-gray-800 text-white text-center font-bold py-2 px-4 rounded-full w-auto focus:outline-none focus:shadow-outline mt-4 block"
        >
          Update Job
        </Link>
        <button
          onClick={handleJobDeleteClick}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-auto focus:outline-none focus:shadow-outline mt-4 block"
        >
          Delete Job
        </button>
      </div>
    </div>
  );
};

export default JobListing;
