import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {AboutUs, AllBooks, Favorites, Home} from './pages';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/all-books",
    element: <AllBooks />,
  },

  {
    path: "/favorites",
    element: <Favorites />,
  },

  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);