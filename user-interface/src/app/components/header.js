"use client";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";
import LoginButton from "./LoginButton.js";

export default function Header() {
    const { user } = useContext(AuthContext);  // Get the user from context

    return (
        <header className="flex justify-between bg-red-900">
            <div className="m-2">Header</div>
            <div className="flex justify-end m-2">{user}</div> {/* Render user or fallback to "Guest" */}
            <LoginButton />
        </header>
    );
}
