"use client";

import Image from "next/image";
import logo from "@/assets/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { WorkerContext } from "@/context/WorkerContext";

const Navbar = () => {
  const { todaysPlan, saveLater } = useContext(WorkerContext);

  const link = (
    <>
      <Link href="/workers">Workouts</Link>
      <Link href="/workerlist">My Plan</Link>
    </>
  );

  return (
    <nav className="bg-[#08090b] shadow-sm">
      <div className="navbar container mx-auto border-b border-gray-700 px-6 text-white">

        {/* ================= Navbar Start ================= */}

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
          <div className="flex items-center gap-2">

            <Image
              src={logo}
              alt="Logo"
              width={28}
              height={28}
            />

            <span className="text-lg font-bold">
              FITLOG
            </span>

          </div>

        </div>


        {/* ================= Navbar Center ================= */}

        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal gap-2">

            {/* Workouts */}
            <li>
              <Link
                href="/workers"
                className="rounded-full bg-[#172800] px-5 text-[#b6ff00]"
              >
                Workouts
              </Link>
            </li>


            {/* My Plan */}
            <li>
              <Link
                href="/workerlist"
                className="text-gray-400 hover:text-white"
              >
                My Plan
              </Link>
            </li>

          </ul>

        </div>


        {/* ================= Navbar End ================= */}

        <div className="navbar-end gap-5">

          {/* Plan Count */}
          <Link
            href="/workerlist"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
          >
            Plan

            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#b6ff00] text-xs font-bold text-black">
              {todaysPlan.length}
            </span>

          </Link>


          {/* Saved Count */}
          <Link
            href="/workerlist"
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
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