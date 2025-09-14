import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import VolunteerAuth from './pages/VolunteerAuth';
import VolunteerDashboard from './pages/VolunteerDashboard';
import OperatorAuth from './pages/OperatorAuth';
import OperatorDashboard from './pages/OperatorDashboard';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/volunteer/auth" element={<VolunteerAuth />} />
            <Route path="/volunteer/dashboard" element={<VolunteerDashboard />} />
            <Route path="/operator/auth" element={<OperatorAuth />} />
            <Route path="/operator/dashboard" element={<OperatorDashboard />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;