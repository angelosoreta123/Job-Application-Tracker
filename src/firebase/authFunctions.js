import { auth } from "./firebaseConfig";
import { signOut } from "firebase/auth";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { toast } from "react-toastify";

export const handleSignup = async (email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    await signOut(auth);
    toast.success("Account created successfully.");
    return null;
  } catch (error) {
    let errorMessage;

    switch (error.code) {
      case "auth/email-already-in-use":
        errorMessage = "This email is already taken.";
        break;
      case "auth/invalid-email":
        errorMessage = "Invalid email format.";
        break;
      case "auth/weak-password":
        errorMessage = "Password should be at least 6 characters.";
        break;
      default:
        errorMessage = "An error occurred during signup. Please try again.";
    }

    return errorMessage;
  }
};

export const handleLogin = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return null;
  } catch (error) {
    if (error) {
      return "Invalid email or password!";
    }
  }
};

export const handleLogout = async () => {
  try {
    await signOut(auth);
    toast.success("Account logged out successfully.");
  } catch (error) {
    console.error(error);
  }
};

export const handleForgotPassword = async (email) => {
  try {

    const signInMethods = await fetchSignInMethodsForEmail(auth, email);

    if (signInMethods.length === 0) {
      return "No user associated with that email address was found!";
    }

    await sendPasswordResetEmail(auth, email);
    toast.success("Password reset email was successfully sent.");
    return null;
  } catch (error) {
    return "An unexpected error occurred. Please try again.";
  }
};

