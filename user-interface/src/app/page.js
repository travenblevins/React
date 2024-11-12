"use client";
import { useContext } from "react";

import Header from "./components/header.js";
import Footer from "./components/footer";
import Message from "./components/message";
import { AuthProvider, AuthContext } from "./context/AuthContext.js";

export default function Home() {
  const user = useContext(AuthContext);

  return (
    <AuthProvider>
      <div className="flex flex-col w-full h-screen">
        <Header />
        <main className="flex flex-grow justify-center pt-5">
          <Message />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
