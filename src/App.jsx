import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./component/Client/Dashboard";
import Album from "./component/Client/Album";
import Lyrics from "./component/Client/Lyrics";
import Login from "./component/Client/Login";
import AddAlbum from "./component/Client/AddAlbum";
import ViewTrack from "./component/Client/Track/ViewTrack";
import AddTrack from "./component/Client/Track/AddTrack";
import Payment from "./component/Client/Payment";
import AddLabel from "./component/Admin/AddLabel";
import Profile from "./component/Client/Profile";
import ADDLyrics from "./component/Client/AddLyrics";

import AdminDashboard from "./component/Admin/Dashboard";
import AdminAlbumTrackPage from "./component/Admin/AlbumTrackPage";
import AdminAllAlbumsPage from "./component/Admin/AllAlbumPage";
import AdminAddAlbumsPage from "./component/Admin/AddAlbum";
import AdminAllLabel from "./component/Admin/AllLabel";
import AdminAllPayment from "./component/Admin/All_Payment";
import AdminInstagramLinkingForm from "./component/Admin/Instagram";
import AdminLyrics from "./component/Admin/Lyrics";
import AdminLyricsSubmission from "./component/Admin/LyricsSubmission";
import AdminArtistProfile from "./component/Admin/ArtistProfile";
import AdminPublishNotification from "./component/Admin/PublishNotification";
import AdminProfile from "./component/Admin/AdminProfile";
import AddNewTrack from "./component/Admin/AddNewTrack";

import SuperAdminDashboard from "./component/SuperAdmin/Dashboard";
import SuperAdminAlbumTrackPage from "./component/SuperAdmin/AlbumTrackPage";
import SuperAdminAllAlbumsPage from "./component/SuperAdmin/AllAlbumPage";
import SuperAdminAddAlbumsPage from "./component/SuperAdmin/AddAlbum";
import SuperAdminAllLabel from "./component/SuperAdmin/AllLabel";
import SuperAdminAllPayment from "./component/SuperAdmin/All_Payment";
import SuperAdminInstagramLinkingForm from "./component/SuperAdmin/Instagram";
import SuperAdminLyrics from "./component/SuperAdmin/Lyrics";
import SuperAdminLyricsSubmission from "./component/SuperAdmin/LyricsSubmission";
import SuperAdminArtistProfile from "./component/SuperAdmin/ArtistProfile";
import SuperAdminPublishNotification from "./component/SuperAdmin/PublishNotification";
import SuperAdminProfile from "./component/SuperAdmin/AdminProfile";
import SuperAddNewTrack from "./component/SuperAdmin/AddNewTrack";

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
    path: "/album/:albumId",
    element: <ViewTrack />,
  },
  {
    path: "/add-track/:albumId",
    element: <AddTrack />,
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
  { path: "/Add_lyrics", element: <ADDLyrics /> },
  { path: "/admin", element: <AdminDashboard /> },
  { path: "/admin/profile", element: <AdminProfile /> },
  { path: "/admin/All_albums", element: <AdminAllAlbumsPage /> },
  { path: "/admin/Add_album", element: <AdminAddAlbumsPage /> },
  { path: "/admin/all_Payment", element: <AdminAllPayment /> },
  { path: "/admin/lyrics", element: <AdminLyrics /> },
  { path: "/admin/all_label", element: <AdminAllLabel /> },
  { path: "/admin/album/:albumId", element: <AdminAlbumTrackPage /> },
  { path: "/admin/add-track/:albumId", element: <AddNewTrack /> },
  { path: "/admin/instagramLinking", element: <AdminInstagramLinkingForm /> },
  { path: "/admin/lyricsSubmission", element: <AdminLyricsSubmission /> },
  { path: "/admin/artistProfile", element: <AdminArtistProfile /> },
  { path: "/admin/publishNotification", element: <AdminPublishNotification /> },

  { path: "/superAdmin", element: <SuperAdminDashboard /> },
  { path: "/superAdmin/profile", element: <SuperAdminProfile /> },
  { path: "/superAdmin/All_albums", element: <SuperAdminAllAlbumsPage /> },
  { path: "/superAdmin/Add_album", element: <SuperAdminAddAlbumsPage /> },
  { path: "/superAdmin/all_Payment", element: <SuperAdminAllPayment /> },
  { path: "/superAdmin/lyrics", element: <SuperAdminLyrics /> },
  { path: "/superAdmin/all_label", element: <SuperAdminAllLabel /> },
  { path: "/superAdmin/album/:albumId", element: <SuperAdminAlbumTrackPage /> },
  { path: "/superAdmin/add-track/:albumId", element: <SuperAddNewTrack /> },
  {
    path: "/superAdmin/instagramLinking",
    element: <SuperAdminInstagramLinkingForm />,
  },
  {
    path: "/superAdmin/lyricsSubmission",
    element: <SuperAdminLyricsSubmission />,
  },
  { path: "/superAdmin/artistProfile", element: <SuperAdminArtistProfile /> },
  {
    path: "/superAdmin/publishNotification",
    element: <SuperAdminPublishNotification />,
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
