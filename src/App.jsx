import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Album from "./component/Album";
import Lyrics from "./component/Lyrics";
import Login from "./component/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/album",
    element: <Album />,
  },
  {
    path: "/lyrics",
    element: <Lyrics />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

const App = () => {
  return (
    <div className="w-full">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
