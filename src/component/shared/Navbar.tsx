"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { WorkerContext } from "@/context/WorkerContext";

const Navbar = () => {
  const { todaysPlan, saveLater } = useContext(WorkerContext);
  const pathname = usePathname();

  const link = (
    <>
      <Link href="/">Workouts</Link>
      <Link href="/workerlist">My Plan</Link>
    </>
  );

  return (
    <nav className="bg-[#08090b] shadow-sm">
      <div className="navbar container mx-auto border-b border-gray-700 px-4 text-white sm:px-6">

        {/* Navbar Start */}
        <div className="navbar-start">

          {/* Mobile Menu */}
          <div className="dropdown">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
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
              className="menu menu-sm dropdown-content z-1 mt-3 w-52 rounded-box bg-[#111315] p-2 text-white shadow"
            >
              {link}
            </ul>

          </div>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="Logo"
              width={28}
              height={28}
            />

            <span className="text-lg font-bold">
              FITLOG
            </span>
          </Link>

        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-2">

            {/* Workouts */}
            <li>
              <Link
                href="/"
                className={
                  pathname === "/"
                    ? "rounded-full bg-[#172800] px-5 text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              >
                Workouts
              </Link>
            </li>

            {/* My Plan */}
            <li>
              <Link
                href="/workerlist"
                className={
                  pathname === "/my-plan"
                    ? "rounded-full bg-[#172800] px-5 text-[#b6ff00]"
                    : "text-gray-400 hover:text-white"
                }
              >
                My Plan
              </Link>
            </li>

          </ul>

        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 sm:gap-5">

          {/* Plan Count */}
          <Link
            href="/workerlist"
            className="flex items-center gap-1 text-xs text-gray-300 hover:text-white sm:gap-2 sm:text-sm"
          >
            Plan

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b6ff00] text-xs font-bold text-black">
              {todaysPlan.length}
            </span>
          </Link>

          {/* Saved Count */}
          <Link
            href="/workerlist"
            className="flex items-center gap-1 text-xs text-gray-300 hover:text-white sm:gap-2 sm:text-sm"
          >
            Saved

            <span className="flex h-4 w-4 items-center justify-center rounded-full border border-gray-500 text-xs font-bold text-white">
              {saveLater.length}
            </span>
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;