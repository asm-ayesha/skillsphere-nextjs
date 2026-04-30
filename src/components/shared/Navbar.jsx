"use client";

import Link from "next/link";
import NavLink from "./NavLink";


const Navbar = () => {
  return (
    <div className="border-b border-b-teal-100 px-2 mb-15">
      <nav className=" flex justify-between items-center  py-3 max-w-7xl mx-auto w-full">
        <div className="flex gap-2 items-center">
        
          <h3 className="font-bold text-2xl text-sky-800">SkillSphere</h3>
        </div>

        <ul className="flex items-center gap-5 text-sm text-sky-600">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/all-photos"}>Courses</NavLink>
          </li>
          <li>
            <NavLink href={"/pricing"}>My Profile</NavLink>
          </li>
        </ul>

        <div className="flex gap-4">
          <ul className="flex items-center  text-sm gap-4">
            <li>
              <Link href={"/signup"}>LogOut</Link>
            </li>
            <li>
              <Link href={"/signin"}>LogIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;