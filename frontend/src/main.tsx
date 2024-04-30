import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RegistrationPage from "./pages/registration/RegistrationPage.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import TablePage from "./pages/table/TablePage.tsx";
const router = createBrowserRouter([
    {
        path : "/",
        element : <App/>,
        children : [
            {
                path : "/registration",
                element : <RegistrationPage/>
            },
            {
                path: "/login",
                element : <LoginPage/>
            },
            {
                path : "/table",
                element : <TablePage/>
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
