import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import FirstFloor from './Pages/firstFloor';
import SecondFloor from './Pages/secondFloor';
import ThirdFloor from './Pages/thirdFloor';
import FourthFloor from './Pages/fourthFloor';
import ResUtil from './Pages/ResUtil';
import Compare from './Pages/compare';
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
  {
    path: "/thirdfloor",
    element: <ThirdFloor />,
  },
  {
    path: "/fourthfloor",
    element: <FourthFloor />,
  },
  {
    path: "/ResUtil",
    element: <ResUtil />,
  },
  {
    path: "/compare",
    element: <Compare />,
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
