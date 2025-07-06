import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Notification {
  id: string;
  type: 'order' | 'payment' | 'rating' | 'system' | 'achievement';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
}

interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    // Load notifications from localStorage
    const savedNotifications = localStorage.getItem('notifications');
    if (savedNotifications) {
      const parsed = JSON.parse(savedNotifications);
      setNotifications(parsed.map((n: any) => ({
        ...n,
        timestamp: new Date(n.timestamp)
      })));
    } else {
      // Initialize with some mock notifications
      const mockNotifications: Notification[] = [
        {
          id: '1',
          type: 'order',
          title: 'New Order Available',
          message: 'Order #12345 is available for pickup from Fresh Market, MG Road',
          timestamp: new Date(Date.now() - 5 * 60 * 1000), // 5 minutes ago
          read: false
        },
        {
          id: '2',
          type: 'payment',
          title: 'Payment Received',
          message: 'You received ₹45 for order #12344. Total earnings today: ₹450',
          timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
          read: false
        },
        {
          id: '3',
          type: 'rating',
          title: 'New Rating Received',
          message: 'Customer rated you 5 stars for excellent service! Keep it up!',
          timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
          read: false
        },
        {
          id: '4',
          type: 'achievement',
          title: 'Milestone Achieved!',
          message: 'Congratulations! You completed 100 deliveries this month',
          timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000), // 4 hours ago
          read: true
        },
        {
          id: '5',
          type: 'system',
          title: 'App Update Available',
          message: 'New features and improvements are available. Update now for better experience',
          timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000), // 1 day ago
          read: true
        }
      ];
      setNotifications(mockNotifications);
    }
  }, []);

  useEffect(() => {
    // Save notifications to localStorage whenever they change
    localStorage.setItem('notifications', JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
    const newNotification: Notification = {
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date(),
      read: false
    };
    
    setNotifications(prev => [newNotification, ...prev]);
  };

  const markAsRead = (id: string) => {
    setNotifications(prev => 
      prev.map(notification => 
        notification.id === id 
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const clearAll = () => {
    setNotifications([]);
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <NotificationContext.Provider value={{
      notifications,
      unreadCount,
      addNotification,
      markAsRead,
      markAllAsRead,
      clearAll
    }}>
      {children}
    </NotificationContext.Provider>
  );
};