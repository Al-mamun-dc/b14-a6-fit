
import Image from "next/image";
import logo from "@/assets/logo.png"
import Link from "next/link";


const Navbar = () => {
  const link=(
    <>
    <Link href="/worker">Workouts</Link>
     <Link href="/worker">My Plan</Link>
    </>
  )
    
  

  return (
    <nav className="bg-[#08090b] shadow-sm">
      <div className="navbar container mx-auto text-white  border-b border-gray-700 px-6">

        <div className="navbar-start">

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#111315] text-white rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>

          <div className='flex gap-2 items-center'>
            <Image
              src={logo}
              alt="Logo"
              width={28}
              height={28}
            />

            <span className="font-bold text-lg">
              FITLOG
            </span>
          </div>

        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2">

            <li>
              <Link href="/workers" className="bg-[#172800] text-[#b6ff00] rounded-full px-5">
                Workouts
              </Link>
          </li>

            <li>
              <Link href="/workerlist" className="text-gray-400 hover:text-white">
                My Plan
              </Link>
            </li>

          </ul>
        </div>

        <div className="navbar-end gap-5">

          <button className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
            Plan
            <span className="bg-[#b6ff00] text-black text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

          <button className="text-sm text-gray-300 hover:text-white flex items-center gap-2">
            Saved
            <span className="border  text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;