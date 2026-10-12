import Image from "next/image";
import React from "react";
import logo from "../../assets/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/books">Workouts</a>
              </li>
              <li>
                <a>Plan</a>
                
              </li>
              
            </ul>
          </div>
          <div className="flex gap-2 items-center">
            <Image src={logo} alt="Book Vibe Logo" />
            FITLOG
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/books">Workouts</Link>
            </li>
            <li>
              <Link href="/listed-books">Plans</Link>
            </li>
            
          </ul>
        </div>
        <div className="navbar-end gap-2">
          <button className="btn btn-success">Plans</button>
          <button className="btn btn-error">Saved</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;