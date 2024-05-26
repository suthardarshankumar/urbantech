import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './context/CartContext';
import { Suspense, lazy } from 'react';
import Loading from './components/common/Loading/Loading';

// Lazy loaded components
const AudioProduct = lazy(() => import('./pages/AudioProduct/AudioProduct'));
const Home = lazy(() => import('./pages/Home/Home'));
const Laptop = lazy(() => import('./pages/Laptop/Laptop'));
const MobileShop = lazy(() => import('./pages/MobileShop/MobileShop'));
const Shop = lazy(() => import('./pages/Shop/Shop'));
const TabletsAndiPads = lazy(() => import('./pages/TabletsAndiPads/TabletsAndiPads'));
const AllProduct = lazy(() => import('./pages/AllProduct/AllProduct'));
const SignUp = lazy(() => import('./pages/SignUp/SignUp'));
const LogIn = lazy(() => import('./pages/LogIn/Login'));
const ResetPassword = lazy(() => import('./pages/ResetPassword/ResetPassword'));
const SearchResult = lazy(() => import('./pages/SearchResult/SearchResult'));
const ContactUs = lazy(() => import('./pages/contact/ContactUs'));
const Accessories = lazy(() => import('./pages/Accessories/Accessories'));
const SmartWatch = lazy(() => import('./pages/SmartWatch/SmartWatch'));
const LogInPage = lazy(() => import('./pages/LogIn/LogInPage'));
const ProductDetails = lazy(() => import('./pages/Product/ProductDetail/ProductDetail'));
const ProductPage = lazy(() => import('./pages/Product/ProductDetail/ProductPage'));
const AddToCart = lazy(() => import('./pages/AddToCart/AddToCart'));
const ShippingAddress = lazy(() => import('./pages/ShippingAddress/ShippingAddress'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Suspense fallback={<Loading />}><Home /></Suspense>,
      },
      {
        path: 'shop',
        element: <Suspense fallback={<Loading />}><Shop /></Suspense>,
        children: [
          {
            path: '',
            element: <Suspense fallback={<Loading />}><AllProduct /></Suspense>,
          },
          {
            path: 'mobile-shop',
            element: <Suspense fallback={<Loading />}><MobileShop /></Suspense>,
          },
          {
            path: 'tablets-and-ipads',
            element: <Suspense fallback={<Loading />}><TabletsAndiPads /></Suspense>,
          },
          {
            path: 'laptop',
            element: <Suspense fallback={<Loading />}><Laptop /></Suspense>,
          },
          {
            path: 'smartwatch',
            element: <Suspense fallback={<Loading />}><SmartWatch /></Suspense>,
          },
          {
            path: 'audio-product',
            element: <Suspense fallback={<Loading />}><AudioProduct /></Suspense>,
          },
          {
            path: 'accessories',
            element: <Suspense fallback={<Loading />}><Accessories /></Suspense>,
          },
          {
            path: 'search-result',
            element: <Suspense fallback={<Loading />}><SearchResult /></Suspense>,
          }
        ],
      },
      {
        path: 'mobile-shop',
        element: <Suspense fallback={<Loading />}><MobileShop /></Suspense>,
      },
      {
        path: 'tablets-and-ipads',
        element: <Suspense fallback={<Loading />}><TabletsAndiPads /></Suspense>,
      },
      {
        path: 'laptop',
        element: <Suspense fallback={<Loading />}><Laptop /></Suspense>,
      },
      {
        path: 'smartwatch',
        element: <Suspense fallback={<Loading />}><SmartWatch /></Suspense>,
      },
      {
        path: 'audio-product',
        element: <Suspense fallback={<Loading />}><AudioProduct /></Suspense>,
      },
      {
        path: 'accessories',
        element: <Suspense fallback={<Loading />}><Accessories /></Suspense>,
      },
      {
        path: 'logInPage',
        element: <Suspense fallback={<Loading />}><LogInPage /></Suspense>,
        children: [
          {
            path: '',
            element: <Suspense fallback={<Loading />}><LogIn /></Suspense>,
          },
          {
            path: 'signUp',
            element: <Suspense fallback={<Loading />}><SignUp /></Suspense>,
          },
          {
            path: 'forget-password',
            element: <Suspense fallback={<Loading />}><ResetPassword /></Suspense>,
          },
        ],
      },
      {
        path: 'contact-us',
        element: <Suspense fallback={<Loading />}><ContactUs /></Suspense>,
      },
      {
        path: 'search-result',
        element: <Suspense fallback={<Loading />}><SearchResult /></Suspense>,
      },
      {
        path: '/product-details/:productNameId',
        element: <Suspense fallback={<Loading />}><ProductDetails /></Suspense>,
      },
      {
        path: '/product-page/:productNameId',
        element: <Suspense fallback={<Loading />}><ProductPage /></Suspense>,
      },
      {
        path: '/add-to-cart',
        element: <Suspense fallback={<Loading />}><AddToCart /></Suspense>,
      },
      {
        path: '/shipping-address',
        element: <Suspense fallback={<Loading />}><ShippingAddress /></Suspense>
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

reportWebVitals();
