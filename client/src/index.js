import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import f1 from './Pages/f1';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter({
  routes: [
    { path: "/", component: App },
    { path: "/f1", component: f1 },
  ],
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
