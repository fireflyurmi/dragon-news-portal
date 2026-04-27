import Link from "next/link";
import React from "react";
import userAvatar from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto w-full mt-10">
      <div className="flex justify-between items-center container mx-auto">
        <div></div>
        <ul className="flex justify-between items-center gap-5">
          <li>
            <NavLink href={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink href={"/about-us"}>About</NavLink>
          </li>
          <li>
            <NavLink href={"/career"}>Career</NavLink>
          </li>
        </ul>
        <div className="flex items-center gap-3">
          <Image src={userAvatar} width={60} height={60} alt="User avatar" />
          <button className="btn btn-neutral">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
