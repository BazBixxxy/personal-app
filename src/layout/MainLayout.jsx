import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import DockComponent from "@/components/dock";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
