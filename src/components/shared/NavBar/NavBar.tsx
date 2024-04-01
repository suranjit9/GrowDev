import Image from "next/image";
import Link from "next/link";
import React from "react";
import sitelogo from "@/assets/icon.png";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../ModeToggle/ModeToggle";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between items-center fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <div className="basis-1/4">
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={sitelogo} alt="logo" width={30} height={30} />
          <p className="text-[24px] font-bold max-sm:hidden">
            Grow <span className="text-[#FF7000]">Dev</span>
          </p>
        </Link>
      </div>
      <div className="basis-1/2">
        <GlobalSearch />
      </div>
     
        <div className="  flex gap-3 items-center">
          <ModeToggle />
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
        </div>
        {/*  */}

        <MobileNav />
      
    </nav>
  );
};

export default NavBar;
