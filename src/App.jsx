import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(createRoutesFromElements(<></>));

  return <RouterProvider router={router} />;
};

function wait(duration) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}

export default App;
