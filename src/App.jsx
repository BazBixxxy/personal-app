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
import ErrorBoundary from "./pages/ErrorBoundaryPage";
import NotFoundPage from "./pages/NotFoundPage";
import SignupPage from "./app/auth/pages/signup-page";
import LoginPage from "./app/auth/pages/login-page";
import ForgotPasswordPage from "./app/auth/pages/forgot-password";
import EmailSentPage from "./app/auth/pages/email-sent";
import { useAuthContext } from "./context/auth-context";
import { Navigate } from "react-router-dom";

const App = () => {
  const { authUser } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {/* auth routes */}
        <Route
          path="/signup"
          errorElement={<ErrorBoundary />}
          element={authUser ? <Navigate to={"/"} /> : <SignupPage />}
        />
        <Route
          path="/login"
          errorElement={<ErrorBoundary />}
          element={authUser ? <Navigate to={"/"} /> : <LoginPage />}
        />
        <Route
          path="/forgot-password"
          errorElement={<ErrorBoundary />}
          element={authUser ? <Navigate to={"/"} /> : <ForgotPasswordPage />}
        />
        <Route
          path="/email-sent"
          errorElement={<ErrorBoundary />}
          element={authUser ? <Navigate to={"/"} /> : <EmailSentPage />}
        />
        {/* <Route
          path="/general-policies"
          errorElement={<ErrorBoundary />}
          element={<GeneralPoliciesPage />}
        />
        <Route
          path="/terms-and-conditions"
          errorElement={<ErrorBoundary />}
          element={<TermsAndConditionsPage />}
        />
        <Route
          path="/privacy-policies"
          errorElement={<ErrorBoundary />}
          element={<PrivacyPoliciesPage />}
        /> */}

        {/* main layout */}
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

        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
