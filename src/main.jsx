import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Components/Layout/HomeLayout/Layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import About from './Components/Pages/About/About';
import Contact from './Components/Pages/Contact/Contact';
import Shop from './Components/Pages/Shop/Shop';
import ProductProvider from './Components/ProductContext/ProductProvider';
import SingleProduct from './Components/Pages/SingleProduct/SingleProduct';
import FilterContext from './Components/ProductContext/FilterContext';
import Cart from './Components/Pages/Cart/Cart';
import CartContext from './Components/ProductContext/CartContext';
import Register from './Components/Pages/Register/Register';
import Login from './Components/Pages/Login/Login';
import AuthProvider from '../Auth/AuthProvider';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/products',
        element: <Shop></Shop>
      },
      {
        path: '/Cart',
        element: <Cart></Cart>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/products/:id',
        element: <SingleProduct></SingleProduct>,
        loader: ({ params }) => fetch(`https://e-commerce-products-server.vercel.app/products/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ProductProvider>
        <FilterContext>
          <CartContext>
            <RouterProvider router={router} />
          </CartContext>
        </FilterContext>
      </ProductProvider>
    </AuthProvider>
  </React.StrictMode>
)
