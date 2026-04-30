"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-b-teal-100 py-3 mb-10">

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <h3 className="font-bold text-2xl text-sky-800">
            SkillSphere
          </h3>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-5 text-sm text-sky-600">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-courses">Courses</NavLink></li>
            <li><NavLink href="/pricing">My Profile</NavLink></li>
          </ul>

          {/* Auth (desktop) */}
          <div className="hidden md:flex gap-4 text-sm">
            <Link href="/signup">LogOut</Link>
            <Link href="/signin">LogIn</Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>

        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 flex flex-col gap-3 text-sky-600">

            <NavLink href="/" onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink href="/all-courses" onClick={() => setOpen(false)}>Courses</NavLink>
            <NavLink href="/pricing" onClick={() => setOpen(false)}>My Profile</NavLink>

            <hr className="my-2" />

            <Link href="/signup" onClick={() => setOpen(false)}>
              LogOut
            </Link>

            <Link href="/signin" onClick={() => setOpen(false)}>
              LogIn
            </Link>

          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;