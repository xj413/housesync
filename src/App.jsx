import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Onboarding from './pages/Onboarding';
import Discovery from './pages/Discovery';
import GroupDashboard from './pages/GroupDashboard';
import GroupChat from './pages/GroupChat';
import PropertyListings from './pages/PropertyListings';
import HouseDetail from './pages/HouseDetail';
import StudentDashboard from './pages/StudentDashboard';
import LandlordDashboard from './pages/LandlordDashboard';
import LoginPage from './pages/LoginPage';
import './index.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <main style={{ paddingTop: '72px' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<LoginPage signup />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/dashboard" element={<StudentDashboard />} />
            <Route path="/discover" element={<Discovery />} />
            <Route path="/group" element={<GroupDashboard />} />
            <Route path="/chat" element={<GroupChat />} />
            <Route path="/properties" element={<PropertyListings />} />
            <Route path="/property/:id" element={<HouseDetail />} />
            <Route path="/landlord" element={<LandlordDashboard />} />
            <Route path="/landlord/listings" element={<LandlordDashboard tab="listings" />} />
            <Route path="/landlord/requests" element={<LandlordDashboard tab="requests" />} />
          </Routes>
        </main>
      </Router>
    </AppProvider>
  );
}

export default App;
