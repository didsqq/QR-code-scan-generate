import { createRoot } from 'react-dom/client'
import {Layout} from './Layout';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import {Navigation} from "./Navigation";
import {QrCodeGenerator } from './QrCodeGenerator';
import {QrCodeScanner } from './QrCodeScanner';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigation></Navigation>,
  },
  {
    path: "/generate",
    element: <QrCodeGenerator/>,
  },
  {
    path: "/scan",
    element: <QrCodeScanner/>,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>,
)
