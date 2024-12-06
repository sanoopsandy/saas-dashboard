import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthStore } from './store/authStore';
import DashboardLayout from './components/layout/DashboardLayout';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Overview from './pages/dashboard/Overview';
import Inbox from './pages/dashboard/Inbox';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore(state => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Overview />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="agents" element={<div className="p-4">Agents Page</div>} />
          <Route path="insights" element={<div className="p-4">Insights Page</div>} />
          <Route path="settings" element={<div className="p-4">Settings Page</div>} />
          <Route path="profile" element={<div className="p-4">Profile Page</div>} />
        </Route>

        {/* Redirect root to dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;