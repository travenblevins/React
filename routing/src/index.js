import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Company() {
  return (
    <div>
      <h1>Company</h1>
      <NavLink to="/">Go to Home Page</NavLink>
      <Outlet />  {/* Renders any nested routes under "/company" */}
    </div>
  );
}

// Define the router with separate components for "/" and "/company"
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <App />
        <NavLink to="/company">Go to Company Page</NavLink>
      </>
    ),
    children: [
      {
        path: "about",
        element: <h1>About Page</h1>
      }
    ]
  },
  {
    path: "/company",
    element: <Company />, // Only displays content for "/company"
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
