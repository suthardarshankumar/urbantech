import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import AudioProduct from './pages/AudioProduct/AudioProduct';
import Home from './pages/Home/Home';
import Laptop from './pages/Laptop/Laptop';
import MobileShop from './pages/MobileShop/MobileShop';
import Shop from './pages/Shop/Shop';
import TabletsAndiPads from './pages/TabletsAndiPads/TabletsAndiPads';
import AllProduct from './pages/AllProduct/AllProduct';

import SignUp from './pages/SignUp/SignUp';
import LogIn from './pages/LogIn/Login';
import ResetPassword from './pages/ResetPassword/ResetPassword';
import SearchResult from './pages/SearchResult/SearchResult';
import ContactUs from './pages/contact/ContactUs';
import Accessories from './pages/Accessories/Accessories';
import SmartWatch from './pages/SmartWatch/SmartWatch';
import LogInPage from './pages/LogIn/LogInPage';
import ProductDetails from './pages/Product/ProductDetail/ProductDetail';
import ProductPage from './pages/Product/ProductDetail/ProductPage';
import AddToCart from './pages/AddToCart/AddToCart';
import { CartProvider } from './context/CartContext';
import ShippingAddress from './pages/ShippingAddress/ShippingAddress';



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'shop',
        element: <Shop />,
        children: [
          {
            path: '',
            element: <AllProduct />,
          },
          {
            path: 'mobile-shop',
            element: <MobileShop />,
          },
          {
            path: 'tablets-and-ipads',
            element: <TabletsAndiPads />,
          },
          {
            path: 'laptop',
            element: <Laptop />,
          },
          {
            path: 'smartwatch',
            element: <SmartWatch />,
          },
          {
            path: 'audio-product',
            element: <AudioProduct />,
          },
          {
            path: 'accessories',
            element: <Accessories />,
          },
          {
            path: 'search-result',
            element: <SearchResult />,
          }
        ],
      },
      {
        path: 'mobile-shop',
        element: <MobileShop />,
      },
      {
        path: 'tablets-and-ipads',
        element: <TabletsAndiPads />,
      },
      {
        path: 'laptop',
        element: <Laptop />,
      },
      {
        path: 'smartwatch',
        element: <SmartWatch />,
      },
      {
        path: 'audio-product',
        element: <AudioProduct />,
      },
      {
        path: 'accessories',
        element: <Accessories />,
      },
      {
        path: 'logInPage',
        element: <LogInPage />,
        children: [
          {
            path: '',
            element: <LogIn />,
          },
          {
            path: 'signUp',
            element: <SignUp />,
          },
          {
            path: 'forget-password',
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      },
      {
        path: 'search-result',
        element: <SearchResult />,
      },
      {
        path: '/product-details/:productNameId',
        element: <ProductDetails />,
      },
      {
        path: '/product-page/:productNameId',
        element: <ProductPage />,
      },
      {
        path: '/add-to-cart',
        element: <AddToCart />,
      },
      {
        path: '/shipping-address',
        element: <ShippingAddress />
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
