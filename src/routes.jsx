import { createBrowserRouter } from "react-router";
import RegisterUser from "./(auth)/register";
import LandingPage from "./landingpage";
import HomePage from "./landingpage/home-page";

export const router = createBrowserRouter([

    {
        path: "/",
        Component: LandingPage,
        children:[
            {index:true, Component:HomePage}
        ]
    },
    {
        path: "/auth",
        // Component:
        children:[
            {index: true, Component: RegisterUser}
        ]
    }
])