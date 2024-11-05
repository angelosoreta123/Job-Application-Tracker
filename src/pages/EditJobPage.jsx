import { useLoaderData, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import JobForm from "../components/JobForm";
import { toast } from "react-toastify";
import { editJob } from "../services/jobService";
import { auth } from "../firebase/firebaseConfig";

const EditJobPage = () => {
  const job = useLoaderData(); // Loader data will contain the job details
  const user = auth.currentUser;
  const userId = user.uid; // Get the current user's UID

  // Initialize state with job data
  const [title, setTitle] = useState(job.title || "");
  const [type, setType] = useState(job.type || "");
  const [location, setLocation] = useState(job.location || "");
  const [description, setDescription] = useState(job.description || "");
  const [salary, setSalary] = useState(job.salary || "");
  const [companyName, setCompanyName] = useState(job.company.name || "");
  const [contactEmail, setContactEmail] = useState(
    job.company.contactEmail !== "N/A" ? job.company.contactEmail : ""
  );
  const [contactPhone, setContactPhone] = useState(
    job.company.contactPhone !== "N/A" ? job.company.contactPhone : ""
  );
  const [status, setStatus] = useState(job.status || "");

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();

    const updatedJob = {
      title,
      type,
      location,
      description: description || "N/A",
      salary,
      company: {
        name: companyName,
        contactEmail: contactEmail || "N/A",
        contactPhone: contactPhone || "N/A",
      },
      status,
    };

    console.log("User ID:", userId);
    console.log("Job ID:", job.id);
    console.log("Updated Job:", updatedJob);

    // Call editJob with userId and job id
    const success = await editJob(userId, job.id, updatedJob); // Pass userId and job.id

    if (success) {
      toast.success("Job updated successfully!");
      navigate("/jobs"); // Navigate only if the job was updated successfully
    }
  };

  return (
    <>
      <JobForm
        formTitle={"Edit Job"}
        onSubmit={submitForm}
        type={type}
        setType={setType}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        salary={salary}
        setSalary={setSalary}
        location={location}
        setLocation={setLocation}
        companyName={companyName}
        setCompanyName={setCompanyName}
        contactEmail={contactEmail}
        setContactEmail={setContactEmail}
        contactPhone={contactPhone}
        setContactPhone={setContactPhone}
        buttonTitle={"Update Job"}
        status={status}
        setStatus={setStatus}
      />
    </>
  );
};

export default EditJobPage;
