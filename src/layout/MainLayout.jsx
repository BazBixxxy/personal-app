import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <span className="fixed top-1 p-2 right-0">
        <AnimatedThemeToggler />
      </span>
      <Outlet />
    </>
  );
};

export default MainLayout;
