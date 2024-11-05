import { toast } from "react-toastify";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// Add a Job
export const addJob = async (userId, jobData) => {
  try {
    const jobsRef = collection(db, "users", userId, "jobs"); // Point to user's jobs subcollection
    await addDoc(jobsRef, {
      ...jobData,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding job:", error);
    toast.error(`Failed to add job: ${error.message}`); // Notify on error
  }
};

// Update a Job
export const editJob = async (userId, jobId, updatedJob) => {
  const jobRef = doc(db, "users", userId, "jobs", jobId); // Reference to the job document
  try {
    await updateDoc(jobRef, updatedJob); // Update the job document
    return true; // Indicate success
  } catch (error) {
    console.error("Error updating job:", error);
    return false; // Indicate failure
  }
};

// Delete a Job
export const deleteJob = async (userId, jobId) => {
  try {
    const jobRef = doc(db, "users", userId, "jobs", jobId); // Reference to the specific job document
    await deleteDoc(jobRef); // Delete the job document
    toast.success("Job deleted successfully!"); // Notify on success
    return true;
  } catch (error) {
    console.error("Failed to delete job:", error);
    toast.error(`Failed to delete job: ${error.message}`); // Detailed error message
    return false;
  }
};
