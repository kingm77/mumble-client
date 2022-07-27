import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login'
import MyTrades from './views/MyTrades';
import Pricer from './views/Pricer';
import Profile from './views/Profile';
import Register from './views/Register';



export default function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/signIn" element={<Login />} />
                    <Route path="/signUp" element={<Register />} />
                    <Route path="/pricer" element={<Pricer />} />
                    <Route path="/myTrades" element={<MyTrades />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

