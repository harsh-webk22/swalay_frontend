import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Client/Dashboard";
import Album from "./component/Client/Album";
import Lyrics from "./component/Client/Lyrics";
import Login from "./component/Client/Login";
import AddAlbum from "./component/Client/AddAlbum";
import Payment from "./component/Client/Payment";
import AddLabel from "./component/Admin/AddLabel";
import Profile from "./component/Client/Profile";
import AdminDashboard from "./component/Admin/Dashboard";
import AdminAlbumTrackPage from "./component/Admin/AlbumTrackPage";
import AdminAllAlbumsPage from "./component/Admin/AllAlbumPage";
import AdminAllLabel from "./component/Admin/AllLabel";
import AdminAll_Payment from "./component/Admin/All_Payment";
import AdminInstagramLinkingForm from "./component/Admin/Instagram";
import AdminLyrics from "./component/Admin/Lyrics";
import AdminLyricsSubmission from "./component/Admin/LyricsSubmission";
import AdminArtistProfile from "./component/Admin/ArtistProfile";
import AdminPublishNotification from "./component/Admin/PublishNotification";
import AdminProfile from "./component/Admin/AdminProfile";

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
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin/profile", element: <AdminProfile /> },
  { path: "/admin/All_albums", element: <AdminAllAlbumsPage /> },
  { path: "/admin/all_Payment", element: <AdminAll_Payment /> },
  { path: "/admin/lyrics", element: <AdminLyrics /> },
  { path: "/admin/all_label", element: <AdminAllLabel /> },
  { path: "/admin/album/:albumId", element: <AdminAlbumTrackPage /> },
  { path: "/admin/instagramLinking", element: <AdminInstagramLinkingForm /> },
  { path: "/admin/lyricsSubmission", element: <AdminLyricsSubmission /> },
  { path: "/admin/artistProfile", element: <AdminArtistProfile /> },
  { path: "/admin/publishNotification", element: <AdminPublishNotification /> },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
