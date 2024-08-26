import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import Dashboard from '../pages/dashboard'
import { AppLayout } from '../AppLayout'
import Patwari from '../pages/patwari'
import AddPatwari from '../pages/addPatwari'

export default function MainRoutes() {
    return (

        <BrowserRouter>
            <AppLayout>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/patwari" element={<Patwari />} />
                    <Route path="/addpatwari" element={<AddPatwari />} />
                    <Route path="/" element={<Dashboard />} />
                    {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </AppLayout>
        </BrowserRouter>

    )
}
