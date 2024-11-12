'use client';
import Link from 'next/link';

export default function Page({ children }) {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-5 gap-5">
      <h1>Welcome to the company</h1>
        <Link href="/" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
            Home
        </Link>
        <Link href="/components/employee" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
            Employee
        </Link>
      </div>
  );
}