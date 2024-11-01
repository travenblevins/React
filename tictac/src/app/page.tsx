// page.tsx
'use client';

import Image from "next/image";
import TicTacRow from "./components/Board.js";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh">
      <div className="flex flex-col justify-row board">
        <div className="flex justify-center items-center">
          <TicTacRow /> {/* Use as a component */}
        </div>
        <div className="flex justify-center items-center">
          <TicTacRow /> {/* Use as a component */}
        </div>
        <div className="flex justify-center items-center">
          <TicTacRow /> {/* Use as a component */}
        </div>
      </div>
    </div>
  );
}
