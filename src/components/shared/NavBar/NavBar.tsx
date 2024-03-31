import Image from "next/image";
import Link from "next/link";
import React from "react";
import sitelogo from "@/Ass/icon.png";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle/ModeToggle";




const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-light-900 dark:bg-dark-200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href={"/"} className="flex items-center gap-1">
        <Image src={sitelogo} alt="logo" width={23} height={23} />
        <p className="text-[24px] font-bold  max-sm:hidden">
          Grow <span className="text-[#FF7000]">Dev</span>
        </p>
      </Link>
      
      <div className="flex items-center justify-between gap-5">
       
        <ModeToggle/>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: " h-10 w-10",
              },
              variables: {
                colorPrimary: "#ff7000",
              },
            }}
          />
        </SignedIn>
        {/*  */}
      </div>
    </nav>
  );
};

export default NavBar;
