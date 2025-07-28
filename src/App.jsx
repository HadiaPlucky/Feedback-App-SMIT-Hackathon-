import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FeedbackForm from "./pages/FeedbackForm";
import ThankYou from './pages/ThankYou';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
