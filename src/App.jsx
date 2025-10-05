import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./app/main/home/pages/HomePage";
import DashboardLayout from "./app/dashboard/layout/DashboardLayout";
import DashboardArticles from "./app/dashboard/articles/pages/ArticlesPage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        {/* dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/articles" element={<DashboardArticles />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
