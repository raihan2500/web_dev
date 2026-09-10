import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from './pages/Home.jsx';
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound.jsx';
import Navbar from './layout/Navbar.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    children: [
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/product",
        element: <Products />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "*",
        element: <PageNotFound />
      }
    ]
  },


]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
