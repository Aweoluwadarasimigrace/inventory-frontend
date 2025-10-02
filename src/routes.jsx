import { createBrowserRouter } from "react-router";
import RegisterUser from "./(auth)/register";
import LandingPage from "./landingpage";
import HomePage from "./landingpage/home-page";
import Login from "./(auth)/Login user";
import ProfilePage from "./sharedComponent/profilepage";
import AdminUsersPage from "./admin/users";
import DashboardLayout from "./layout";
import Dashboard from "./layout/dashboard";
import ProductPage from "./layout/product";
import ProtectedRouteLayout from "./layout/protect route";
import CreateuserForm from "./admin/users/createusers";
import CustomerPage from "./layout/customers";
import CreateCustomerForm from "./layout/customers/createcustomerform";
import CreateProductForm from "./layout/product/createproduct";
import EditProductForm from "./layout/product/editproductform";
import Sales from "./layout/sales";
import CreateSalesForm from "./layout/sales/createsalesform";
import EditSalesForm from "./layout/sales/editsalesform";
import SalesReturn from "./layout/sales return";
import CreateSalesReturn from "./layout/sales return/createsalesreturn";
import EditSalesReturn from "./layout/sales return/editsalesreturn";
import SalesReport from "./layout/sales Report";
import PurchaseLayout from "./layout/purchase";
import CreatePurchaseForm from "./layout/purchase/createPurchaseform";
import EditPurchaseForm from "./layout/purchase/edit purchase form";

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
      { path: "login", Component: Login }
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
          {path: "createcustomer", Component: CreateCustomerForm},
          {path: "product", Component: ProductPage},
          {path: "createproduct", Component: CreateProductForm},
          {path: "editproduct/:id", Component: EditProductForm},
          {path: "sales", Component: Sales},
          {path: "createsales", Component: CreateSalesForm},
          {path: "editsales/:salesId", Component: EditSalesForm},
          {path: "salesreturn", Component: SalesReturn},
          {path: "createsalesreturn", Component: CreateSalesReturn},
          {path: "editsalesreturn/:id", Component: EditSalesReturn},
          {path: "purchase", Component: PurchaseLayout},
          {path: "createpurchase", Component: CreatePurchaseForm},
          {path: "editpurchase/:id", Component: EditPurchaseForm},
          {path: "reports", Component: SalesReport}
        ]
      },
    ],

  },
]);
