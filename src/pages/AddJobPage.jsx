import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import JobForm from "../components/JobForm";
import { addJob } from "../services/jobService";
import { auth } from "../firebase/firebaseConfig";

const AddJobPage = () => {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("Full-Time");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("Below ₱10,000");
  const [companyName, setCompanyName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [status, setStatus] = useState("Applied");

  const navigate = useNavigate();

  const user = auth.currentUser;
  const userId = user.uid;

  const submitForm = async (e) => {
    e.preventDefault();

    const newJob = {
      title,
      type,
      description: description || "N/A",
      location,
      salary,
      company: {
        name: companyName,
        contactEmail: contactEmail || "N/A",
        contactPhone: contactPhone || "N/A",
      },
      status,
    };
    try {
      await addJob(userId, newJob);
      toast.success("Job added successfully!");
      navigate("/jobs");
    } catch (error) {
      toast.error("Failed to add job. Please try again.");
    }
  };

  return (
    <JobForm
      formTitle={"Add Job"}
      onSubmit={submitForm}
      type={type}
      setType={setType}
      title={title}
      setTitle={setTitle}
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
      buttonTitle={"Add Job"}
      status={status}
      setStatus={setStatus}
      description={description}
      setDescription={setDescription}
    />
  );
};

export default AddJobPage;
