import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AddProduct from "./views/AddProduct/AddProduct"
import Home from "./views/Home/Home"


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
    path: "/details/_id",
    element:<ProductDetails/>,
  },
  // {
  //   path: "/",
  //   element: <div>Hello world!</div>,
  // },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />

);


