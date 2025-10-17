import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar";
import { Suspense } from "react";
import ScrollToTop from "@/components/scroll-top";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="my-16">
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default MainLayout;
