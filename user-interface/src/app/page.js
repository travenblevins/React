"use client";
import { useEffect, useState } from "react";

import Image from "next/image";
import Header from "./components/header.js";
import Footer from "./components/footer";
import Message from "./components/message";
import LoginButton from "./components/LoginButton";

import { AuthContext } from "./context/AuthContext.js";

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser("Johnny");
  }, []);

  return (
    <div className="flex flex-col w-full h-screen">
      <AuthContext.Provider value={{user, setUser}}>
        <Header/>
        <main className="flex flex-grow justify-center pt-5">
          <Message/>
        </main>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}
