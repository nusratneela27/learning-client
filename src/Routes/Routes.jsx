import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Classes from "../pages/Classes/Classes";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../layout/DashBoard";
import MySelectedClass from "../pages/Dashboard/MySelectedClass/MySelectedClass";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'classes',
                element: <PrivateRoute><Classes></Classes></PrivateRoute>
            }
        ]
    },
    {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
        children: [
            {
                path: "mycart",
                element: <MySelectedClass></MySelectedClass>
            }
        ]
    }
]);