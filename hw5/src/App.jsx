import React from 'react';
import { Routes, Route } from 'react-router';
import Navbar from './components/Navbar.jsx';
import Layout from './components/Layout.jsx';
import MarketPage from './pages/MarketPage';
import BasketPage from './pages/BasketPage';

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route path='/' element={<MarketPage/>} />
        <Route path='/basket' element={<BasketPage/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App;
