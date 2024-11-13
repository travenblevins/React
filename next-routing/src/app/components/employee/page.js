import Link from 'next/link';

export default function Page() {
    return (
      <div className="h-screen w-full flex flex-col items-center pt-5 gap-5">
        <h1>I am an employee</h1>
        <Link href="/" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
            Home
        </Link>
        <Link href="/components" className="bg-cyan-400 pl-5 pr-5 pt-2 pb-2 text-black rounded">
            Company
        </Link>
      </div>
    );
  }