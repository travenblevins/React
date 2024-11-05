"use client"

import Image from "next/image";
import TodoList from "./components/ToDo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <TodoList />
    </div>
  );
}
