import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import BottomNavigation from './BottomNavigation';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { driver } = useAuth();
  const location = useLocation();
  
  const isAuthPage = ['/login', '/signup', '/forgot-password'].includes(location.pathname);
  const isLandingPage = location.pathname === '/';
  
  if (isAuthPage || isLandingPage || !driver) {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20 pt-16">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default Layout;