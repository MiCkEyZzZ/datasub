import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Home, Payment } from './pages'

export const listRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="payment" element={<Payment />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </>
    )
}
