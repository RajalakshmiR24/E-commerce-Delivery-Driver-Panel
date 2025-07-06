import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, Package, Wallet, User, History } from 'lucide-react';

const BottomNavigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { id: 'home', icon: Home, label: 'Home', path: '/dashboard' },
    { id: 'orders', icon: Package, label: 'Orders', path: '/orders' },
    { id: 'earnings', icon: Wallet, label: 'Earnings', path: '/earnings' },
    { id: 'history', icon: History, label: 'History', path: '/history' },
    { id: 'profile', icon: User, label: 'Profile', path: '/profile' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <div className="flex items-center justify-around">
        {tabs.map(({ id, icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={id}
              onClick={() => navigate(path)}
              className={`flex flex-col items-center px-3 py-2 min-w-0 ${
                isActive 
                  ? 'text-blue-600' 
                  : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-xs font-medium">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;