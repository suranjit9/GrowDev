import LeftSideBar from "@/components/shared/LeftSideBar/LeftSideBar";
import NavBar from "@/components/shared/NavBar/NavBar";
import RightSideBar from "@/components/shared/RightSideBar/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <NavBar />
      <div className="flex flex-row">
       <div className="basis-1/2">
       <LeftSideBar />
       </div>
        <section className="flex min-h-screen basis-1/2 flex-col">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <div className="basis-1/2">
       <LeftSideBar />
       </div>

      </div>
    </main>
  );
};

export default Layout;
