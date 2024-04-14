import LeftSideBar from "@/components/shared/LeftSideBar/LeftSideBar";
import NavBar from "@/components/shared/NavBar/NavBar";
import RightSideBar from "@/components/shared/RightSideBar/RightSideBar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="">
      <NavBar />
      <div className="flex ">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        <RightSideBar/>
      </div>
    </main>
  );
};

export default Layout;
