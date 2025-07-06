import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { OrderProvider } from './contexts/OrderContext';
import { NotificationProvider } from './contexts/NotificationContext';
import Layout from './components/Layout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Earnings from './pages/Earnings';
import History from './pages/History';
import Profile from './pages/Profile';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { driver, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return driver ? <>{children}</> : <Navigate to="/login" />;
};

const PublicRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { driver } = useAuth();
  return driver ? <Navigate to="/dashboard" /> : <>{children}</>;
};

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <OrderProvider>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={
                  <PublicRoute>
                    <Landing />
                  </PublicRoute>
                } />
                <Route path="/login" element={
                  <PublicRoute>
                    <Login />
                  </PublicRoute>
                } />
                <Route path="/signup" element={
                  <PublicRoute>
                    <Signup />
                  </PublicRoute>
                } />
                <Route path="/dashboard" element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } />
                <Route path="/orders" element={
                  <ProtectedRoute>
                    <Orders />
                  </ProtectedRoute>
                } />
                <Route path="/earnings" element={
                  <ProtectedRoute>
                    <Earnings />
                  </ProtectedRoute>
                } />
                <Route path="/history" element={
                  <ProtectedRoute>
                    <History />
                  </ProtectedRoute>
                } />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                } />
              </Routes>
            </Layout>
          </Router>
        </OrderProvider>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;