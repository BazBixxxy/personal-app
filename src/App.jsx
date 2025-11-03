import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import DashboardLayout from "./app/dashboard/layout/DashboardLayout";

const DashboardHomePage = React.lazy(() =>
  import("./app/dashboard/home/pages/DashboardHomePage")
);
const NewArticlePage = React.lazy(() =>
  import("./app/dashboard/articles/add/pages/NewArticlePage")
);
const EditArticlePage = React.lazy(() =>
  import("./app/dashboard/articles/edit/pages/EditArticlePage")
);

const HomePage = React.lazy(() => import("./app/main/home/pages/HomePage"));
const ArticlesPage = React.lazy(() =>
  import("./app/main/articles/pages/ArticlesPage")
);
const ArticlePage = React.lazy(() =>
  import("./app/main/articles/article/pages/ArticlePage")
);
const BookmarksPage = React.lazy(() =>
  import("./app/main/articles/bookmarks/pages/BookmarksPage")
);

import SignupPage from "./app/auth/pages/signup-page";
import LoginPage from "./app/auth/pages/login-page";
import ForgotPasswordPage from "./app/auth/pages/forgot-password";
import EmailSentPage from "./app/auth/pages/email-sent";
import GeneralPoliciesPage from "./pages/GeneralPoliciesPage";
import TermsOfUsePage from "./pages/TermsOfUsePage";
import PrivacyPoliciesPage from "./pages/PrivacyPoliciesPage";

import ErrorBoundary from "./pages/ErrorBoundaryPage";
import NotFoundPage from "./pages/NotFoundPage";

import { useAuthContext } from "./context/auth-context";
import { Navigate } from "react-router-dom";
import { articleLoader } from "./services/loaders";

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
        <Route
          path="/general-policies"
          errorElement={<ErrorBoundary />}
          element={<GeneralPoliciesPage />}
        />
        <Route
          path="/terms-and-conditions"
          errorElement={<ErrorBoundary />}
          element={<TermsOfUsePage />}
        />
        <Route
          path="/privacy-policies"
          errorElement={<ErrorBoundary />}
          element={<PrivacyPoliciesPage />}
        />

        {/* main layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route
            path="/articles/:id"
            loader={articleLoader}
            element={<ArticlePage />}
          />
          <Route path="/bookmarks" element={<BookmarksPage />} />
        </Route>

        {/* dashboard layout */}
        <Route
          path="/dashboard"
          element={
            authUser && authUser.isAuthor ? (
              <DashboardLayout />
            ) : (
              <Navigate to={"/login"} />
            )
          }
        >
          <Route path="/dashboard/home" element={<DashboardHomePage />} />
          <Route path="/dashboard/articles/add" element={<NewArticlePage />} />
          <Route
            path="/dashboard/articles/edit/:id"
            loader={articleLoader}
            element={<EditArticlePage />}
          />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
