import React from 'react';
import {createBrowserRouter, RouterProvider, Link} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Navigation from './components/organisms/Navigation';
import ErrorPage from './components/pages/error';
import Hero from './components/organisms/Hero';
import Calculator from './components/molecules/calculator';
import Home from './components/pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/hero",
        element: <Hero />,
      },
      {
        path: "/calculator",
        element: <Calculator />,
      },
      {
        path: "/documentation",
        element: <Link to="https://github.com/kudanmedia/huble/blob/master/public/resources/FEA_Kudakwashe_Nyengera.pdf" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);