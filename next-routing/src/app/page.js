import Link from 'next/link';

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col items-center pt-5 gap-5">
      <h1>This is the home page</h1>
      <Link href="/components" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
              Company
      </Link>
      <Link href="/components/employee" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
              Employee
      </Link>
    </div>
  );
}
