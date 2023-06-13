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
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import Error from "../pages/Error/Error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Error></Error>,
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
        element: <PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
        children: [
            {
                path: "mycart",
                element: <MySelectedClass></MySelectedClass>
            },
            {
                path: "allusers",
                element: <AllUsers></AllUsers>
            }
        ]
    }
]);