"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants/sidebarLink";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import sitelogo from "@/assets/icon.png";

const LeftSideBar = () => {
  const pathname = usePathname();
  return (
    <section className=" left-0 bg-[#151821] top-0 flex flex-col justify-between h-screen overflow-y-auto border p-6 pt-11 lg:w-[266px] max-sm:hidden">
      <div className="flex flex-1 flex-col pt-11 gap-6">
        {sidebarLinks.map((item) => {
          const isactive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              key={item.route}
              href={item.route}
              className={`${
                isactive
                  ? `rounded-lg font-bold text-white bg-[#FF7000] p-4`
                  : `font-medium text-dark-100 dark:text-light-900`
              } flex items-center justify-center gap-4`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />

              <p>{item.label}</p>
            </Link>
          );
        })}
      </div>
      <SignedOut>
        <div className="flex flex-col gap-x-3.5">
          <div>
            <Link href={"/sign-in"}>
              <Button className="bg-[#3F4354] dark:bg-[#FF7000] w-full">
                <span className="text-xl font-medium">Log In</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-x-3.5 mt-3">
          <div>
            <Link href={"/sign-up"}>
              <Button className="bg-[#212734] dark:text-[#FF7000] w-full">
                <span className="text-xl font-medium">Sign Up</span>
              </Button>
            </Link>
          </div>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
