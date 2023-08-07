import React, { useState } from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import MainContainer from './components/MainContainer';

const Router = () => {
    const [isLogged, setIsLogged] = useState(false);

    const handleLoggedIn = () => {
        setIsLogged(!isLogged);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/login'
                    element={
                        !isLogged ? (
                            <Login handleLoggedIn={handleLoggedIn} />
                        ) : (
                            <Navigate replace to='/' />
                        )
                    }
                />
                <Route
                    path='/'
                    element={
                        isLogged ? (
                            <MainContainer />
                        ) : (
                            <Navigate replace to='/login' />
                        )
                    }
                />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
