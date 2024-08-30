import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import { AppLayout } from '../AppLayout'
import Patwari from '../pages/patwari'
import AddPatwari from '../pages/addPatwari'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function MainRoutes() {

    const isAuthenticated = useSelector(state => !!state.authReducer.user);
    return (
        <AppLayout>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} />
                <Route path="/patwari" element={isAuthenticated ? <Patwari /> : <Navigate to="/login" />} />
                <Route path="/addpatwari" element={isAuthenticated ? <AddPatwari /> : <Navigate to="/login" />} />
            </Routes>
        </AppLayout>
    );
}
