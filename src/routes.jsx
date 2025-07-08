import { createBrowserRouter } from "react-router";
import RegisterUser from "./(auth)/register";

export const router = createBrowserRouter([
    {
        path: "/auth",
        // Component:
        children:[
            {index: true, Component: RegisterUser}
        ]
    }
])