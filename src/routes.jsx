import { createBrowserRouter } from "react-router";
import RegisterUser from "./(auth)/register";
import LandingPage from "./landingpage";
import HomePage from "./landingpage/home-page";
import VerficationMessage from "./(auth)/verification message";
import ResendEmailForm from "./(auth)/resend email";
import Dashboard from "./dashboard";
import Login from "./(auth)/Login user";
import VerifyEmail from "./(auth)/verify email";
import ProfilePage from "./sharedComponent/profilepage";
import AdminProfile from "./sharedComponent/profilepage/adminprofilepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: "/auth",
    // Component:
    children: [
      { index: true, Component: RegisterUser },
      { path: "login", Component: Login },
      { path: "verify-message", Component: VerficationMessage },
      { path: "verify-email", Component: VerifyEmail },
      { path: "resend-email", Component: ResendEmailForm },
    ],
  },
  {
    path: "/profile",
    children: [
      { index: true, Component: ProfilePage },
      {path: "admin", Component: AdminProfile}
    ]
  },
  {
    path: "/dashboard",
    children: [
      {index: true, Component: Dashboard },
],

  },
]);
