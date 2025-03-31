
import { createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/home/Home';
import Gallery from '../pages/shop/Gallery';
import AboutUs from '../pages/contact/AboutUs';
import Testimony from '../pages/testimony/Testimony';
import SingleProduct from '../pages/shop/productDetails/SingleProduct';
import Login from '../components/Login';
import Register from '../components/Register';
import DashboardLayout from '../pages/dashboard/DashboardLayout';
import UserDMain from "../pages/dashboard/users/dashboard/UserDMain";
import UserOrders from "../pages/dashboard/users/UserOrders";
import PrivateRoute from './PrivateRoute';
import AddProduct from "../pages/dashboard/admin/addProduct/AddProduct";
import PaymentSuccess from '../components/PaymentSuccess';
import UserPayments from "../pages/dashboard/users/UserPayments";
import UserReviews from "../pages/dashboard/users/UserReviews";
import UserProfile from "../pages/dashboard/users/UserProfile";
import AdminDMain from "../pages/dashboard/admin/dashboard/AdminDMain";
import ManageProduct from "../pages/dashboard/admin/manageProduct/ManageProduct";
import UpdateProduct from "../pages/dashboard/admin/manageProduct/UpdateProduct";
import ManageUser from "../pages/dashboard/admin/users/ManageUser";
import ManageOrders from "../pages/dashboard/admin/manageOrders/ManageOrders";
import OrderDetails from "../pages/dashboard/users/OrderDetails";




const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {path: "/", element:<Home/>},
      {path: "/shop", element:<Gallery/>},
      {path: "/shop", element:<Gallery/>},
      {path: "/contact", element:<AboutUs/>},
      {path: "/testimony", element:<Testimony/>},
      {path: "/shop/:id", element: <SingleProduct/>},
      {
        path: "/success",
        element: <PaymentSuccess/>
    },

    {
      path: "/orders/:orderId",
      element: <OrderDetails/>
  }

   

    ]
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },

  // dashboard routes start here

  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout/></PrivateRoute>, // use pirvate route
    children: [
      // user routes
      {path: '', element: <UserDMain/>},
      {path: 'orders', element: <UserOrders/>},
      {path: 'payments', element: <UserPayments/>},
      {path: 'profile', element: < UserProfile/>},
      {path: 'reviews', element: <UserReviews/>},

      // admin routes (only accessible by admin) Todo: private routes with role field
      
      {
        path: "admin", 
        element: <PrivateRoute role="admin"><AdminDMain/></PrivateRoute>
      },
      {
        path: "add-product", 
        element: <PrivateRoute role="admin"><div><AddProduct/></div></PrivateRoute>
      },
      {
        path: "manage-products", 
        element: <PrivateRoute role="admin"><ManageProduct/></PrivateRoute>
      },
      {
        path: "update-product/:id", 
        element: <PrivateRoute role="admin"><UpdateProduct/></PrivateRoute>
      },
      {
        path: "users", 
        element: <PrivateRoute role="admin"><ManageUser/></PrivateRoute>
      },
      {
        path: "manage-orders", 
        element: <PrivateRoute role="admin"><ManageOrders/></PrivateRoute>
      },
    ]
  }

]);

export default router;