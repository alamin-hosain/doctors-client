import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Appointment from "../Pages/Appointment/Appointment";
import AddADoctor from "../Pages/Dashboard/AddADoctor";
import AllUsers from "../Pages/Dashboard/AllUsers";
import ManageDoctors from "../Pages/Dashboard/ManageDoctors";
import MyAppointment from "../Pages/Dashboard/MyAppointment";
import Payment from "../Pages/Dashboard/Payment";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import DisplayEorror from "../Pages/Shared/DisplayEorror";
import Signup from "../Pages/Signup";
import AdminRoute from "./adminRoutes";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        errorElement: <DisplayEorror />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/appointment', element: <Appointment /> },
            { path: '/signup', element: <Signup /> },
        ]
    },

    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        errorElement: <DisplayEorror />,
        children: [
            { path: '/dashboard', element: <MyAppointment /> },
            { path: '/dashboard/users', element: <AdminRoute> <AllUsers /></AdminRoute> },
            { path: '/dashboard/adddoctor', element: <AdminRoute> <AddADoctor /></AdminRoute> },
            { path: '/dashboard/managedoctors', element: <AdminRoute> <ManageDoctors /></AdminRoute> },
            {
                path: '/dashboard/payment/:id', element: <Payment />,
                loader: ({ params }) => fetch(`https://doctor-server-six.vercel.app/bookings/${params.id}`)
            }

        ]
    }
])

export default router;