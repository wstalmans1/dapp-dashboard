import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ProfilesPage from "./components/ProfilesPage";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";


import './styles/main.css';

const router = createBrowserRouter([ 
    { path: "/", element: <HomePage />, errorElement: <NotFoundPage />},
    { path: "/profiles", element: <ProfilesPage />},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);    
