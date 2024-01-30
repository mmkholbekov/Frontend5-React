import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import List from './pages/List';
import Create from './pages/Create';
import React from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  )
}

export default App;
