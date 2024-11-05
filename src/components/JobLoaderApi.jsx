import { db } from "../firebase/firebaseConfig"; // Adjust the import according to your project structure
import { doc, getDoc } from "firebase/firestore";
import { auth } from "../firebase/firebaseConfig"; // Import auth to access the current user's UID

const JobLoaderApi = async ({ params }) => {
  try {
    const user = auth.currentUser; // Get the current user
    if (!user) {
      throw new Error("User not authenticated"); // Handle case where user is not logged in
    }

    const jobDocRef = doc(db, "users", user.uid, "jobs", params.id); // Reference to the job document
    const jobSnapshot = await getDoc(jobDocRef); // Fetch the job document

    if (jobSnapshot.exists()) {
      // Return the document ID along with the job data
      return { id: jobSnapshot.id, ...jobSnapshot.data() };
    } else {
      throw new Error("Job not found"); // Handle case where job does not exist
    }
  } catch (error) {
    console.error("Error fetching job:", error);
    throw new Error("Failed to load job data: " + error.message); // Handle and rethrow the error
  }
};

export default JobLoaderApi;
