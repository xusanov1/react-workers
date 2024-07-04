import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Nav from './components/Nav'
import HomePage from './pages/home/HomePage';
import FiredUsersPage from './pages/firedUsers/FiredUser';

const App = () => (
  <Router>
    <Nav />
    {/* <nav>
      <Link to="/">Bosh sahifa</Link> | <Link to="/fired-users">Ishdan bo'shatilganlar</Link>
    </nav> */}
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/fired-users" element={<FiredUsersPage />} />
    </Routes>
  </Router>
);

export default App;
