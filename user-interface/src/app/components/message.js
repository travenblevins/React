"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import { AuthDispatchContext } from "../context/AuthContext.js";

export default function Message() {
  const user = useContext(AuthContext);  // Get the user from context

  return (
    <div>
      <h1>Hello {user}</h1>  {/* Render user or fallback to "Guest" */}
    </div>
  );
}
