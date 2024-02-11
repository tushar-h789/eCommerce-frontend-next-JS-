import Login from "./pages/Login";
import {
  createBrowserRouter,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Otp from "./pages/Otp";
import Dashboard from "./pages/Dashboard/DashboardHome/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import ChangePassword from "./pages/ChangePassword";
import Gmail from "./pages/Gmail";
import UserList from "./pages/Dashboard/UserList/UserList";
import Merchant from "./pages/Dashboard/Merchant/Merchant";
import Admin from "./pages/Dashboard/Admin/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
    // children: [
    //   {
    //     path: "/registration",
    //     element: <Registration/>
    //   }
    // ]
  },
  {
    path: 'registration',
    element: <Registration/>
  },
  {
    path: '/otp/:email',
    element: <Otp/>
  },
  {
    path: 'forgotpassword',
    element: <ForgotPassword/>
  },
  {
    path: 'gmail',
    element: <Gmail/>
  },
  {
    path: '/changepassword/:email',
    element: <ChangePassword/>
  },
  {
    path: 'dashboard',
    element: <Dashboard/>,
    children: [
      {
        path: 'userlist',
        element: <UserList/>
      },
      {
        path: 'merchant',
        element: <Merchant/>
      },
      {
        path: 'admin',
        element: <Admin/>
      }
    ]
  }
]);
