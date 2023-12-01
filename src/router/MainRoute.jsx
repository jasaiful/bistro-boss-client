import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUP from "../pages/SignUp/SignUP";
import Secret from "../pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import AdminHome from "../pages/Dashboard/AdminHome/AdminHome";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/menu",
                element: <Menu></Menu>
            },
            {
                path: "/order/:category",
                element: <Order></Order>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signUp",
                element: <SignUP></SignUP>
            },
            {
                path: "/secret",
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            // normal user routes
            {
                path: 'userHome',
                element: <UserHome></UserHome>
            },
            {
                path: 'cart',
                element: <Cart></Cart>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            },

            // admin only routes
            {
                path: 'adminHome',
                element: <AdminRoute> <AdminHome></AdminHome> </AdminRoute>
            },
            {
                path: 'addItems',
                element: <AdminRoute><AddItems></AddItems></AdminRoute>
            },
            {
                path: 'manageItems',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path: 'users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ]
    }
])

export default MainRoute;