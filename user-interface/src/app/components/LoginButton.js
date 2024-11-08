"use client"

import React from "react";
import { useContext } from "react";
import { AuthDispatchContext } from "../context/AuthContext.js";

export default function LoginButton() {
    const dispatch = useContext(AuthDispatchContext);
    
    const login = () => {
        dispatch({
            type: "LOGIN",
            user: "Gary"
        });
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
