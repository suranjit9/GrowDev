"use client";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { HiMenuAlt4 } from "react-icons/hi";
import sitelogo from "@/assets/icon.png";
import { Button } from "@/components/ui/button";
import { SignedOut } from "@clerk/nextjs";
import { sidebarLinks } from "@/constants/sidebarLink";
import { usePathname } from "next/navigation";


const NavContent = () => {
  const pathname = usePathname();
  return (
    <section className="flex  flex-col gap-6 text-center mt-4 mb-4">
      {sidebarLinks.map((item) => {
        const isactive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <SheetClose asChild key={item.route}>
            <Link
              href={item.route}
              className={`${
                isactive
                  ? `rounded-lg font-bold text-white bg-[#FF7000] p-4`
                  : `font-medium text-dark-100 dark:text-light-900`
              } flex items-center justify-center gap-4`}
            >
              <Image src={item.imgURL} loading="lazy" alt={item.label} width={20} height={20}/>
              <p>{item.label}</p>
            </Link>
          </SheetClose>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <HiMenuAlt4 className="text-xl sm:hidden" />
      </SheetTrigger>
      <SheetContent className="border-0" side="left">
        {/* <SheetHeader> */}
        <Link href={"/"} className="flex items-center gap-1">
          <Image src={sitelogo} alt="logo" width={30} height={30} />
          <p className="text-[24px] font-bold ">
            Grow <span className="text-[#FF7000]">Dev</span>
          </p>
        </Link>
        <hr />
        <SheetClose asChild>
          <NavContent/>
        </SheetClose>

        <div>
          <SignedOut>
            <div className="flex flex-col gap-x-3.5">
              <SheetClose asChild>
                <Link href={"/sign-in"}>
                  <Button className="bg-[#3F4354] dark:bg-[#FF7000] w-full">
                    <span className="text-xl font-medium">Log In</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
            <div className="flex flex-col gap-x-3.5 mt-3">
              <SheetClose asChild>
                <Link href={"/sign-up"}>
                  <Button className="bg-[#212734] dark:text-[#FF7000] w-full">
                    <span className="text-xl font-medium">Sign Up</span>
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SignedOut>
        </div>
        {/* </SheetHeader> */}
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
