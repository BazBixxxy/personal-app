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
import NewArticlePage from "./app/dashboard/articles/add/pages/NewArticlePage";
import DashboardHomePage from "./app/dashboard/home/pages/DashboardHomePage";
import ArticlesPage from "./app/main/articles/pages/ArticlesPage";
import ArticlePage from "./app/main/articles/article/pages/ArticlePage";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Route>
        {/* dashboard layout */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route path="/dashboard/home" element={<DashboardHomePage />} />
          <Route path="/dashboard/articles/add" element={<NewArticlePage />} />
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
