import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNotifications } from '../contexts/NotificationContext';
import { Bell, User, MapPin } from 'lucide-react';
import NotificationPanel from './NotificationPanel';

const Header: React.FC = () => {
  const { driver, updateDriver } = useAuth();
  const { notifications, unreadCount, markAsRead, markAllAsRead, clearAll } = useNotifications();
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleOnlineStatus = () => {
    if (driver) {
      updateDriver({ isOnline: !driver.isOnline });
    }
  };

  const handleNotificationClick = () => {
    setShowNotifications(true);
  };

  const handleCloseNotifications = () => {
    setShowNotifications(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={driver?.photo || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'}
                alt="Driver"
                className="w-10 h-10 rounded-full border-2 border-gray-200"
              />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                driver?.isOnline ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
            <div>
              <h1 className="text-sm font-semibold text-gray-900">
                {driver?.name || 'Driver'}
              </h1>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <MapPin className="w-3 h-3" />
                <span>Bangalore</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleOnlineStatus}
              className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
                driver?.isOnline 
                  ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {driver?.isOnline ? 'Online' : 'Offline'}
            </button>
            
            <button 
              onClick={handleNotificationClick}
              className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            >
              <Bell className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center px-1">
                  {unreadCount > 99 ? '99+' : unreadCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <NotificationPanel
        isOpen={showNotifications}
        onClose={handleCloseNotifications}
        notifications={notifications}
        onMarkAsRead={markAsRead}
        onMarkAllAsRead={markAllAsRead}
        onClearAll={clearAll}
      />
    </>
  );
};

export default Header;