import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Client/Dashboard";
import Album from "./component/Client/Album";
import Lyrics from "./component/Client/Lyrics";
import Login from "./component/Client/Login";
import AddAlbum from "./component/Client/AddAlbum";
import Payment from "./component/Client/Payment";
import AddLabel from "./component/Admin/AddLabel";
import Profile from "./component/Client/Profile"

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
  {
    path: "/add_album",
    element: <AddAlbum />,
  },
  {
    path: "/payments",
    element: <Payment />,
  },
  {
    path: "/addLabel",
    element: <AddLabel />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
