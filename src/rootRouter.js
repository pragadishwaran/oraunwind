import React from "react";
import { useLocation, Navigate, Outlet, BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './component/Login'
const rootRouter = () => {
    return(
        <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    )
}

export default rootRouter;