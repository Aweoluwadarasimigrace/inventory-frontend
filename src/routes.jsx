import { createBrowserRouter } from "react-router";
import RegisterUser from "./(auth)/register";
import LandingPage from "./landingpage";
import HomePage from "./landingpage/home-page";
import VerficationMessage from "./(auth)/verification message";
import ResendEmailForm from "./(auth)/resend email";
import Login from "./(auth)/Login user";
import VerifyEmail from "./(auth)/verify email";
import ProfilePage from "./sharedComponent/profilepage";
import AdminUsersPage from "./admin/users";
import DashboardLayout from "./layout";
import Dashboard from "./layout/dashboard";
import ProductPage from "./layout/product";
import ProtectedRouteLayout from "./layout/protect route";
import CreateuserForm from "./admin/users/createusers";
import CustomerPage from "./layout/customers";
import CreateCustomerForm from "./layout/customers/createcustomerform";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
    children: [{ index: true, Component: HomePage }],
  },
  {
    path: "/auth",
    children: [
      { index: true, Component: RegisterUser },
      { path: "login", Component: Login },
      { path: "verify-message", Component: VerficationMessage },
      { path: "verify-email", Component: VerifyEmail },
      { path: "resend-email", Component: ResendEmailForm },
    ],
  },
  {
    path: "/dashboard",
    Component: ProtectedRouteLayout,
    children: [
      {
        Component: DashboardLayout,
        children: [
          { index: true, Component: Dashboard },
          { path: "products", Component: ProductPage },
          { path: "users", Component: AdminUsersPage },
           {path: "createuser", Component: CreateuserForm},
          { path: "profile", Component: ProfilePage },
          {path: "customer", Component: CustomerPage},
          {path: "createcustomer", Component: CreateCustomerForm}
        ]
      },
    ],

  },
]);
