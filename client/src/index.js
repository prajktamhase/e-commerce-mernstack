import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AddProduct from "./views/AddProduct/AddProduct"
import Home from "./views/Home/Home"
import UpdateProduct from './views/UpdateProduct/UpdateProduct';
import ProductDetails from "./views/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/addproduct",
    element: <AddProduct/>,
  },
  {
    path: "/updateproduct/:_id",
    element: <UpdateProduct/>,
  },
  {
    path: "/details/:_id",
    element:<ProductDetails/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);


