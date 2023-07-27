import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from "../Home/Main";
import Details from "../Pages/Details";
import Register from "../Register/Register";
import Login from "../Login/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>

  },


  {
    path: 'product/:_id',
    element: <Details></Details>,
    loader: ({ params }) => fetch(`http://localhost:5000/product/${params._id}`)
  },
  
  {
    path: '/login',
    element: <Login></Login>
  },

  {
    path: '/register',
    element: <Register></Register>
  }
]);

export default router;