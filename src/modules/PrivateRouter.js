import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import isLogin from '../components/utils/isLogin';

function PrivateRouter({ children }) {
    const auth = isLogin();
    return auth ? children : <Navigate to="/login" />;
}

export default PrivateRouter;