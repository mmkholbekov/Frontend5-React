import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PostsList from './pages/PostsList';
import CreatePost from './pages/CreatePost';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout><PostsList /></Layout>} />
      <Route path="/create-post" element={<Layout><CreatePost /></Layout>} />
    </Routes>
  </Router>
);

export default App;
