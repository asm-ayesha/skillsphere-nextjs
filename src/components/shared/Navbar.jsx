"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const userData = authClient.useSession()
  const user = userData.data?.user




  const handleSignOut = async () => {
    await authClient.signOut()
    window.location.href = "/signin";
  }

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
            <li><NavLink href="/profile">My Profile</NavLink></li>
          </ul>

          {/* Auth (desktop) */}
          <div className="hidden md:flex gap-4 text-sm">
            {!user && <ul>
              <Link className="font-bold text-sky-800 border border-sky-200 rounded-xl px-3 py-1 hover:bg-sky-800 hover:text-white" href="/signup">SignUp</Link>
              <Link className="ml-2 font-bold text-sky-800 border border-sky-200 rounded-xl px-3 py-1 hover:bg-sky-800 hover:text-white" href="/signin">SignIn</Link>
            </ul>}
            {user &&
              <div className="flex gap-3">
                <Avatar size="sm" >
                  <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                  <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
                <Link onClick={handleSignOut} size="sm" className="font-bold text-sky-800 border border-sky-200 rounded-xl px-3 py-1 hover:bg-sky-800 hover:text-white" href="/signin">Sign Out</Link>
              </div>
            }
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
            <NavLink href="/profile" onClick={() => setOpen(false)}>My Profile</NavLink>

            <hr className="my-2" />

            <Link className="font-bold text-sky-800 border border-sky-200 rounded-xl px-3 py-1 hover:bg-sky-800 hover:text-white" href="/signup" onClick={() => setOpen(false)}>
              Sign Up
            </Link>

            <Link className="font-bold text-sky-800 border border-sky-200 rounded-xl px-3 py-1 hover:bg-sky-800 hover:text-white" href="/signin" onClick={() => setOpen(false)}>
              Sign In
            </Link>

          </div>
        )}

      </nav>
    </div>
  );
};

export default Navbar;