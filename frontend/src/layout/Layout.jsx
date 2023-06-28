import React from "react";
import Sidebar from "../Component/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="grid w-full h-screen grid-cols-12">
      <div className=" col-span-2">
        <Sidebar />
      </div>
      <div className="  col-span-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
