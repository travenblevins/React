'use client'
// Import React and necessary Firebase Auth methods
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { initializeFirebase } from "../services/firebase";
import { FirebaseAuthProvider } from "../context/firebaseAuthContext";

// Ensure Firebase is initialized
initializeFirebase();

const Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between sign-in and sign-up
  const [message, setMessage] = useState("");

  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setMessage(`Welcome, ${userCredential.user.email}! Your account has been created.`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setMessage(`Welcome back, ${userCredential.user.email}! You are signed in.`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>{isSignIn ? "Sign In" : "Sign Up"}</h2>
      <form onSubmit={isSignIn ? handleSignIn : handleSignUp}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            className="text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            className="text-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", margin: "8px 0" }}
          />
        </div>
        <button type="submit" style={{ width: "100%", padding: "10px", margin: "8px 0" }}>
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
      </form>
      <button
        onClick={() => setIsSignIn(!isSignIn)}
        className="text-black"
        style={{ width: "100%", padding: "10px", margin: "8px 0", backgroundColor: "#f0f0f0" }}
      >
        {isSignIn ? "Need an account? Sign Up" : "Already have an account? Sign In"}
      </button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Page;
