import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Home/Main";
import Details from "../Pages/Details";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Dashboard/Dashboard";
import AddCategory from "../Dashboard/AdminDashboard/AddCategory";
import AdminRoute from "./AdminRoute";
import AddProduct from "../Dashboard/AdminDashboard/AddProduct";
import BuyPage from "../Dashboard/BuyProduct/BuyPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

    ]

  },


  {
    path: 'product/:_id',
    element: <Details></Details>,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params._id}`)
  },


  {
    path: 'buyProduct/:_id',
    element: <BuyPage></BuyPage>,

  },
  
  {
    path: '/login',
    element: <Login></Login>
  },

  {
    path: '/register',
    element: <Register></Register>
  },

  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
  },

  {
    path: '/addCategory',
    element: <AdminRoute><AddCategory></AddCategory></AdminRoute>
  },

  {
    path: '/addProduct',
    element: <AdminRoute><AddProduct></AddProduct></AdminRoute>
  },



]);

