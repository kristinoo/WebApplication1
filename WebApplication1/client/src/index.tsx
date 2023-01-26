import React from "react";
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import { AppUI } from "./pages/AppUI";
import AuthPage from "./pages/AuthPage";
import Home from "./pages/Home";
import RegPage from "./pages/RegPage";
import PairsPage from "./pages/PairsPage";
import ProfilePage from "./pages/ProfilePage";
import ProfileEdit from "./pages/ProfileEdit";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AppUI children={<Outlet />} />} >
            <Route index element = {<Home/>}/>
            <Route path="/auth" element = {<AuthPage/>}/>
            <Route path="/reg" element = {<RegPage/>}/>
            <Route path="/history" element = {<PairsPage/>}/>
            <Route path="/profile/*" element = {<ProfilePage/>}/>
            <Route path="/edit" element = {<ProfileEdit/>}/>
        </Route>
    )
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

