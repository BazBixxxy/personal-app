import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/navbar";
import { Suspense } from "react";
import ScrollToTop from "@/components/scroll-top";
import Footer from "@/components/footer";
import LoadingSpinner from "@/components/loading-spinner";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="my-16 min-h-screen">
        <Suspense fallback={<LoadingSpinner />}>
          <ScrollToTop />
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
