import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirstFloor from './Pages/firstFloor';
import SecondFloor from './Pages/secondFloor';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/firstfloor",
    element: <FirstFloor />,
  },
  {
    path: "/secondfloor",
    element: <SecondFloor />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
