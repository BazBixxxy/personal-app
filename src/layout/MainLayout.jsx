import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import DockComponent from "@/components/navbar";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Outlet />
      <DockComponent />
    </>
  );
};

export default MainLayout;
