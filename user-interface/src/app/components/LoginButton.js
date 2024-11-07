"use client"
import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

export default function LoginButton() {
    const { user, setUser } = useContext(AuthContext);
    const login = () => {
        setUser("Patrick")
    }
    return (

        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={login}>
                Login
            </button>
        </div>
    );
}
