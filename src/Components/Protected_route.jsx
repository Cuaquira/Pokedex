import React from 'react';
import { useSelector } from "react-redux";
import { Outlet, Navigate } from 'react-router-dom';

const Protectec_route = () => {

    const username = useSelector((state) => state.username);

    if (username) {
        return <Outlet />
    } else {
            alert("Ingresa un nombre")
            return <Navigate to="/" />
    }
};

export default Protectec_route;