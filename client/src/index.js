import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import './index.css';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import ErrorPage from './components/pages/Error-page';

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <Login />,
	  errorElement: <ErrorPage />,
	},
	{
		path: "/register",
		element: <Register />,
		errorElement: <ErrorPage />,
	  },
  ]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);