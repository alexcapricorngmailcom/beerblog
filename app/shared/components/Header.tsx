import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 bg-gray-800">
      <div className="container mx-auto px-3">
        <nav className="flex justify-between items-center">
          <Link href={'/'} className="flex hover:opacity-80 duration-300">
            <div className="relative w-10 h-10 bg-yellow-500 text-gray-800">
              <span className="absolute bottom-0 left-1 text-2xl font-bold ">Be</span>
              <span className="absolute top-0 right-0.5 text-sm font-bold leading-5">4</span>
            </div>
            <div className="relative w-10 h-10 ml-1.5 bg-yellow-500 text-gray-800">
              <span className="absolute bottom-0 left-1 text-2xl font-bold ">Er</span>
              <span className="absolute top-0 right-0.5 text-sm font-bold leading-5">68</span>
            </div>
            <div className="relative w-16 h-10 bg-gray-800 text-yellow-500">
              <span className="absolute bottom-0 left-1 text-2xl font-bold ">Blog</span>
            </div>
          </Link>
          <div className="nav-link flex flex-row">
            <Link href={'/about'} className="text-xl font-bold text-yellow-500 hover:opacity-80 duration-300">About</Link>
            <Link href={'/articles'} className="text-xl font-bold pl-5 text-yellow-500 hover:opacity-80 duration-300">Articles</Link>
            <Link href={'/contacts'} className="text-xl font-bold pl-5 text-yellow-500 hover:opacity-80 duration-300">Contacts</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}