import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import Sidebar from '../components/sideBar/Sidebar'
import { AppLayout } from '../AppLayout'

export default function MainRoutes() {
    return (

        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </AppLayout>
        </BrowserRouter>

    )
}
